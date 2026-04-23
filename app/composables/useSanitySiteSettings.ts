import groq from 'groq'
import seed from '~/data/sanity-seed.json'

const siteSettingsQuery = groq`
  *[_id == "siteSettings"][0]{
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
  }
`

export type SiteSettings = (typeof seed)['siteSettings']

export async function useSanitySiteSettings() {
  const { data } = await useSanityQuery<SiteSettings | null>(siteSettingsQuery)
  const settings = computed(
    () => (data.value ?? seed.siteSettings) as SiteSettings,
  )
  return { settings }
}
