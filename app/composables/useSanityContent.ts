import groq from 'groq'
import seed from '~/data/sanity-seed.json'

export type SiteSettings = (typeof seed)['siteSettings']

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
 * One GROQ round-trip, shared across the app via a stable asyncData key.
 * Do not await: `data` stays null until the CDN responds; computeds fall back
 * to bundled seed so the UI is instant, then upgrades when live data arrives.
 */
export function useSanityContent() {
  const { data, pending, error, refresh } = useSanityQuery<SanityBundle | null>(
    sanityDocumentsQuery,
    undefined,
    { key: SANITY_ASYNC_KEY },
  )

  const site = computed(
    () => (data.value?.site ?? seed.siteSettings) as SiteSettings,
  )

  const menu = computed(() =>
    normalizeMenuPage(data.value?.menu ?? seed.menuPage),
  )

  return { site, menu, pending, error, refresh }
}
