import groq from 'groq'

/** Published `siteSettings` fields we query (Sanity is the only source of truth). */
export type SiteSettings = {
  orderOnlineUrl?: string
  footerAddressLine1?: string
  footerAddressLine2?: string
  footerHoursLine1?: string
  footerHoursLine2?: string
  footerPhone?: string
  footerEmail?: string
  seoTitle?: string
  seoDescription?: string
  seoOgImagePath?: string
  seoSiteUrl?: string
}

export type MenuItem = {
  name?: string
  price?: string
  description?: string
}

export type MenuSection = {
  title?: string
  slug?: string
  modifierText?: string
  subHeader?: string
  layout?: 'grid' | 'boba'
  items?: MenuItem[]
  boba?: {
    title?: string
    price?: string
    flavorsSubtitle?: string
    flavors?: string[]
  }
}

export type MenuPage = {
  navTitle?: string
  gratuityNotice?: string
  rawConsumptionWarning?: string
  sections?: MenuSection[]
}

type SanityBundle = {
  site: SiteSettings | null
  menu: Record<string, unknown> | null
}

function sectionSlug(section: {
  slug?: string | { current?: string }
}): string | undefined {
  if (typeof section.slug === 'string') return section.slug
  return section.slug?.current
}

export function normalizeMenuPage(raw: unknown): MenuPage {
  if (!raw || typeof raw !== 'object') return { sections: [] }
  const doc = raw as Record<string, unknown>
  const sections = (doc.sections as MenuSection[] | undefined)?.map(
    (s) => ({
      ...s,
      slug: sectionSlug(s),
    }),
  )
  return {
    navTitle: doc.navTitle as string | undefined,
    gratuityNotice: doc.gratuityNotice as string | undefined,
    rawConsumptionWarning: doc.rawConsumptionWarning as string | undefined,
    sections,
  }
}

const sanityDocumentsQuery = groq`
  {
    "site": *[_id == "siteSettings"][0]{
      orderOnlineUrl,
      footerAddressLine1,
      footerAddressLine2,
      footerHoursLine1,
      footerHoursLine2,
      footerPhone,
      footerEmail,
      seoTitle,
      seoDescription,
      seoOgImagePath,
      seoSiteUrl
    },
    "menu": *[_id == "menuPage"][0]{
      navTitle,
      gratuityNotice,
      rawConsumptionWarning,
      sections[]{
        title,
        "slug": slug.current,
        modifierText,
        subHeader,
        layout,
        items[]{ name, price, description },
        boba
      }
    }
  }
`

const SANITY_ASYNC_KEY = 'sanity-site-and-menu'

/**
 * One GROQ round-trip; data comes only from Sanity (no bundled seed fallback).
 */
export function useSanityContent() {
  const { data, pending, error, refresh } = useSanityQuery<SanityBundle | null>(
    sanityDocumentsQuery,
    undefined,
    { key: SANITY_ASYNC_KEY },
  )

  const site = computed(() => (data.value?.site ?? null) as SiteSettings | null)

  const menu = computed(() => normalizeMenuPage(data.value?.menu))

  const ready = computed(() => {
    if (pending.value) return false
    if (error.value) return false
    const s = data.value?.site
    const m = data.value?.menu
    if (!s?.orderOnlineUrl) return false
    if (!m || typeof m !== 'object') return false
    const sections = (m as { sections?: unknown }).sections
    if (!Array.isArray(sections) || sections.length === 0) return false
    return true
  })

  return { site, menu, pending, error, refresh, ready }
}
