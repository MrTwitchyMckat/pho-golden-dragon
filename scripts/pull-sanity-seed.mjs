/**
 * Writes app/data/sanity-seed.json from the live Sanity dataset (published documents).
 * Use this after editing in Studio so the bundled fallback matches production and
 * avoids flash of stale copy on first paint.
 *
 * Requires: public read access to the dataset (default) or SANITY_API_READ_TOKEN.
 *
 * Run: npm run sanity:pull-seed
 * Env: .env at repo root (or studio/.env) — NUXT_PUBLIC_SANITY_* or SANITY_STUDIO_*.
 */
import { createClient } from '@sanity/client'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outDir = join(root, 'app', 'data')
const outFile = join(outDir, 'sanity-seed.json')

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return
  const text = readFileSync(filePath, 'utf8')
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const exportPrefix = 'export '
    const lineBody = trimmed.startsWith(exportPrefix)
      ? trimmed.slice(exportPrefix.length)
      : trimmed
    const eq = lineBody.indexOf('=')
    if (eq === -1) continue
    const key = lineBody.slice(0, eq).trim()
    let val = lineBody.slice(eq + 1).trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    process.env[key] = val
  }
}

loadEnvFile(join(root, '.env'))
loadEnvFile(join(root, 'studio', '.env'))

const projectId =
  process.env.NUXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  '03e15w02'
const dataset =
  process.env.NUXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  'production'

const token =
  process.env.SANITY_API_READ_TOKEN?.trim() ||
  process.env.SANITY_API_WRITE_TOKEN?.trim() ||
  undefined

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-04-01',
  useCdn: true,
  ...(token ? { token, useCdn: false } : {}),
})

const query = `{
  "siteSettings": *[_id == "siteSettings"][0],
  "menuPage": *[_id == "menuPage"][0]
}`

const result = await client.fetch(query)

if (!result?.siteSettings) {
  console.error(
    'No siteSettings document found (_id must be "siteSettings"). Seed the project first (npm run sanity:seed) or create it in Studio.',
  )
  process.exit(1)
}
if (!result?.menuPage) {
  console.error(
    'No menuPage document found (_id must be "menuPage"). Seed the project first (npm run sanity:seed) or create it in Studio.',
  )
  process.exit(1)
}

const payload = {
  siteSettings: result.siteSettings,
  menuPage: result.menuPage,
}

mkdirSync(outDir, { recursive: true })
writeFileSync(outFile, JSON.stringify(payload, null, 2), 'utf8')
console.log(
  `Wrote ${outFile} from Sanity (${projectId} / ${dataset}). Commit this file to align the app fallback with Studio.`,
)
