import groq from 'groq'
import seed from '~/data/sanity-seed.json'

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
  sections?: MenuSection[]
}

function sectionSlug(section: {
  slug?: string | { current?: string }
}): string | undefined {
  if (typeof section.slug === 'string') return section.slug
  return section.slug?.current
}

function normalizeMenuPage(raw: unknown): MenuPage {
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
    sections,
  }
}

const menuPageQuery = groq`
  *[_id == "menuPage"][0]{
    navTitle,
    gratuityNotice,
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
`

export async function useSanityMenuPage() {
  const { data } = await useSanityQuery<MenuPage | null>(menuPageQuery)
  const menu = computed(() =>
    normalizeMenuPage(data.value ?? seed.menuPage),
  )
  return { menu }
}
