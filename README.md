# reddit-snoo-generator

A small Reddit Snoo generator built with React, TypeScript and Material UI.

## Development

This project uses [Vite](https://vitejs.dev/) for the dev server and build step.

```bash
npm install
npm run dev
```

When the dev server starts it prints a local address (usually `http://localhost:5173`).
Open that URL in your browser to see the generator UI.

## Deploying to GitHub Pages

GitHub Pages serves static files only. The `index.html` in this repository
expects Vite to compile `/src/main.tsx` at runtime, which does not happen when
served from Pages. To deploy the app you need to build the project first and
upload the contents of the generated `dist` folder.

When building for GitHub Pages you also need to set Vite's `base` option so
that asset URLs include the repository name. This project already sets
`base: '/reddit-snoo-generator/'` in `vite.config.ts`.

```bash
npm run build
```

After the build finishes, point GitHub Pages to the `dist/` directory (or push
that directory to a separate branch such as `gh-pages`). The site will then load
the compiled JavaScript instead of the raw TypeScript entry file.

You can automate this step with GitHub Actions. The workflow in
`.github/workflows/deploy.yml` installs dependencies, runs `npm run build` and
publishes the generated `dist/` folder to GitHub Pages whenever changes are
pushed to the `master` branch.
