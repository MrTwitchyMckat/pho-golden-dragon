# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Sanity → Netlify: rebuild when content is published

Production builds on Netlify run **`npm run build:netlify`**, which **pulls** `siteSettings` and `menuPage` from your Sanity dataset into `app/data/sanity-seed.json`, then runs **`nuxt build`**. You do **not** need to commit seed changes for every menu edit if deploys run from Studio.

### 1. Netlify build hook

1. Netlify: **Site configuration** → **Build & deploy** → **Continuous deployment** → **Build hooks**.
2. **Add build hook** (e.g. name `sanity-publish`), choose the same branch Netlify usually builds from.
3. Copy the hook URL (keep it private — anyone with the URL can trigger a build).

### 2. Sanity webhook

1. [Sanity Manage](https://www.sanity.io/manage) → your project → **API** → **Webhooks** → **Create webhook**.
2. **URL**: paste the Netlify build hook URL.
3. **Dataset**: `production` (or the dataset this site uses).
4. **Trigger / filter**: limit to the documents that should trigger a site rebuild, e.g. only when **`siteSettings`** or **`menuPage`** change (GROQ filter or event filter, depending on the UI). If you omit a filter, **any** write in the dataset can trigger a deploy.
5. Save. After you **publish** in Studio, Sanity POSTs to Netlify and a new deploy starts within about a minute.

### 3. Netlify environment variables

Set **`NUXT_PUBLIC_SANITY_PROJECT_ID`** and **`NUXT_PUBLIC_SANITY_DATASET`** on Netlify to match your project (same as local). The pull script uses these on CI (no `.env` file required). For a **private** dataset, add a read-capable token as **`SANITY_API_READ_TOKEN`** (or reuse an Editor token only if you accept the risk — prefer a read-only token).

### 4. Local builds

`npm run build` skips the pull (fast, works offline). Use **`npm run build:netlify`** locally when you want the same steps as Netlify, or run **`npm run sanity:pull-seed`** before `npm run build`.
