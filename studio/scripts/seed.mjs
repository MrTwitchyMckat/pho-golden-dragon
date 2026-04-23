/**
 * Upserts singleton documents into Sanity. Requires write token:
 *   SANITY_API_WRITE_TOKEN=... npm run seed
 * (run from /studio)
 */
import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..', '..')
const seedPath = join(root, 'app', 'data', 'sanity-seed.json')

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN (Editor token from sanity.io/manage).')
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
