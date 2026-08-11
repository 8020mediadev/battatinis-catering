# Deployment Pipeline

This repository is the **source of truth** for https://battatinis-catering.vercel.app

## Workflow

    prompt -> code change -> commit + push to main -> Vercel auto-builds -> production

Pushing to `main` triggers a production deployment automatically. Pushing any
other branch produces a preview deployment with its own URL.

## Vercel build settings

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Install Command | `npm install --legacy-peer-deps` |
| Build Command | `npx vite build` |
| Output Directory | `dist/public` |
| Production Branch | `main` |

Do not deploy by uploading files directly to Vercel. All changes go through git.
