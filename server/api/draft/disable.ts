export default defineEventHandler((event) => {
  if (!import.meta.dev) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' })
  }

  deleteCookie(event, 'gd-draft-preview', { path: '/' })

  const next = getQuery(event).next
  const target =
    typeof next === 'string' &&
    next.startsWith('/') &&
    !next.startsWith('//') &&
    !next.startsWith('/api')
      ? next
      : '/'

  return sendRedirect(event, target, 302)
})
