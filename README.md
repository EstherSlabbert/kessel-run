# Kessel Run Website

This is a website for a company called Kessel Run that deals with freight consolidation (on land) or trucking transportation.

The application was built using Vite, React + Typescript.

To run locally:

`npm ci`

`npm run dev`

for deploying to dev:

`npm ci`

`npm run build -- --mode development`

`npm run preview` to preview the build

`cd ./dist/` then `zip -r ../dist/zip *`

deploy to resource command e.g. to Azure via Github Actions `az webapp deployment source config-zip --resource-group ${{ vars.AZUREPLATFORM_RESOURCEGROUP_NAME }} --name kessel-run--webapp-frontend --src dist.zip --debug`

To run in production:

`npm ci`

`npm run build -- --mode production`

`cd ./dist/` then `zip -r ../dist/zip *`

and host using something like Nginx.

## Resources used

Photo by [Gabriel Santos]("https://unsplash.com/@photogasan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") on [Unsplash]("https://unsplash.com/photos/white-truck-on-road-during-daytime-GBVDilE8yvI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash")

Image by [Yolanda Coervers](https://pixabay.com/users/yolanda-42465/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=165619) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=165619)

[Photo by KATRIN  BOLOVTSOVA](https://www.pexels.com/photo/lady-justice-and-a-gavel-6077123/)

Photo by [Paul Skorupskas](https://unsplash.com/@pawelskor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/person-holding-camera-lens-7KLa-xLbSXA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

[Photo by Ivan  Babich](https://www.pexels.com/photo/green-leaves-on-a-tree-22145348/)

Image by [jacke1970](https://pixabay.com/users/jacke1970-1643493/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1290696) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1290696)

[South Africa svg](https://simplemaps.com/svg/country/za#admin1)

[shadcn/ui components](https://ui.shadcn.com/)

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
