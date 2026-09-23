# itqan

Itqan Solutions LLC web presence and future application workspace.

## Apps

- `web` - React + Vite + Tailwind CSS landing page

## Run the web app

```bash
cd web
npm install
npm run dev
```

The app is structured as a standalone Vercel-ready Vite project inside `web` so additional apps can be added alongside it later.

## GitHub Pages

Pushes to `main` deploy the `web` app through [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**. The site will be available at `https://https-sai.github.io/itqan/` after the first successful workflow run.