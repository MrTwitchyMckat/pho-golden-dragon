/**
 * Upserts singleton documents into Sanity. Requires write token:
 *   SANITY_API_WRITE_TOKEN=... npm run seed
 * (run from /studio)
 *
 * Loads env from repo-root `.env` then `studio/.env` (same names as Nuxt).
 */
import { createClient } from '@sanity/client'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..', '..')
const seedPath = join(root, 'app', 'data', 'sanity-seed.json')

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
loadEnvFile(join(__dirname, '..', '.env'))

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) {
  console.error(
    'Missing SANITY_API_WRITE_TOKEN. Add it to the repo-root .env (or studio/.env), e.g.\n' +
      '  SANITY_API_WRITE_TOKEN=sk...\n' +
      'Create a token at https://www.sanity.io/manage → API → Tokens (Editor).',
  )
  process.exit(1)
}

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '03e15w02'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-04-01',
  token,
  useCdn: false,
})

const raw = JSON.parse(readFileSync(seedPath, 'utf8'))

const { siteSettings, menuPage } = raw

const tx = client.transaction()
tx.createOrReplace(siteSettings)
tx.createOrReplace(menuPage)

await tx.commit({ autoGenerateArrayKeys: true })
console.log(`Seeded ${dataset} on ${projectId}: siteSettings, menuPage`)
