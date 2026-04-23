import type { SiteSettings } from './useSanityContent'

export function useSanitySeo(settings: Ref<SiteSettings | null>) {
  watchEffect(() => {
    const s = settings.value
    if (!s?.seoTitle) return

    const siteUrl = s.seoSiteUrl?.replace(/\/$/, '') || ''
    const ogPath = s.seoOgImagePath?.startsWith('/')
      ? s.seoOgImagePath
      : `/${s.seoOgImagePath || ''}`
    const ogImageAbs =
      siteUrl && ogPath ? `${siteUrl}${ogPath}` : ogPath || undefined

    useSeoMeta({
      title: s.seoTitle,
      description: s.seoDescription,
      ogTitle: s.seoTitle,
      ogDescription: s.seoDescription,
      ogImage: ogImageAbs,
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogType: 'website',
      ogUrl: siteUrl || undefined,
      twitterCard: 'summary_large_image',
      twitterImage: ogImageAbs,
    })
  })
}
