# Ganiu Quadri Portfolio

A responsive portfolio built with Next.js, TypeScript, and CSS Modules. It uses Next.js static export so the site can be deployed to GitHub Pages.

## Run locally

```bash
npm ci
npm run dev
```

## Build the static site

```bash
npm run build
```

The static site is written to `out/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`. In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The former Jekyll source is retained in `docs/` but is no longer used by the workflow.

Project details and skills live in reusable data structures in `app/data.ts`. Public product URLs are shown; private repository URLs are intentionally not included.

## Content to finish

- Add Google Play Store URLs for MyLaundry and GN Data when available.
- Add public website or app links for Kwari E-Market and Standify if they should be listed.
- Confirm the current status of Kwari E-Market and Standify.
- Add a CV file before enabling a download button.
- Replace the abstract project artwork with approved product screenshots when available.
