/**
 * Dev-only query proxy. Published fetches stay anonymous. Draft preview uses a
 * server-side token so it never ships in the static client bundle.
 */
export default defineEventHandler(async (event) => {
  if (!import.meta.dev) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' })
  }

  const body = await readBody<{
    query?: string
    params?: Record<string, unknown>
    options?: Record<string, unknown>
  }>(event)

  if (!body?.query || typeof body.query !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Missing GROQ query' })
  }

  const preview = getCookie(event, 'gd-draft-preview') === '1'
  const token =
    process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN

  if (preview && !token) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Draft preview needs SANITY_API_READ_TOKEN or SANITY_API_WRITE_TOKEN in .env',
    })
  }

  const perspective = preview ? 'drafts' : 'published'
  const sanity = useSanity(event)
  const client = sanity.client.withConfig({
    token: preview ? token : undefined,
    useCdn: !preview,
    perspective,
  })

  return client.fetch(body.query, body.params ?? {}, {
    ...(body.options ?? {}),
    filterResponse: false,
    perspective,
    useCdn: !preview,
    token: preview ? token : undefined,
    stega: false,
  })
})
