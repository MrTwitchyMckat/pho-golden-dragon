export function useSanitySiteSettings() {
  const { site: settings } = useSanityContent()
  return { settings }
}
