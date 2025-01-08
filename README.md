# npm create vite@latest

# npm install

# npm run dev

- https://www.npmjs.com/package/react-router

# npm i react-router-dom

1. файл router.tsx

https://maggieshpileva.github.io/BeansProject/
https://jelly-belly-wiki.netlify.app/

#e83a4b

2. Деплой

 - npm run build

 - npm i gh-pages --save-dev

 - "deploy": "gh-pages -d build",
   "predeploy": "npm run build"

- создаем с вами в корневой директории еще одну папку под названием “.github”.
В этой папке создаем еще одну папку под названием Workflows. И в этой папке создаем файл 

- С сайта https://vite.dev/guide/static-deploy.html  берем настройки с раздела GitHub Pages

- на гитхад Settings - pages - ветка main  - созраняем и берем ссылку https://nataly-suv.github.io/M18-Dz/ и вставляем в package.json "homepage": "https://nataly-suv.github.io/M18-Dz", // nataly-suv - ник в гитхаб, M18-Dz - имя репозитория


- После этого заходим в vite.config.ts. И добавляем после плагинов base (то есть базовый наш URL).
base: "M18-Dz" // M18-Dz - имя репозитория

- Если все успешно, то нам еще раз нужно собрать данный проект, но уже с теми путями, которые мы определили. Мы убираем папку dist, удаляем ее и опять пишем команду npm run build. Это у нас pre-deploy

- комитим и пушим 

- После этого возвращаемся в репозиторий и заходим в Actions. Здесь у нас уже есть тот коммит, который мы сделали, а также добавился pages build and deploy.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
