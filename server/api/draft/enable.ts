export default defineEventHandler((event) => {
  if (!import.meta.dev) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' })
  }

  setCookie(event, 'gd-draft-preview', '1', {
    path: '/',
    sameSite: 'lax',
    httpOnly: false,
  })

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
