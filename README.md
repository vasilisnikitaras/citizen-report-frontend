# React + TypeScript + Vite 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Citizen Report & SIGAQC

Crafted by Vasilis — a dashboard with clarity, multilingual reach, and poetic soul.  
Empowering civic voices through modular exports and elegant UI.

## ✨ Features
- 🌍 Multilingual interface (EN/FR/GR)
- 🌗 Dark/Light theme toggle
- 📤 Export-ready architecture (CSV now, JSON/TXT coming soon)
- 📧 Branded email dispatch
- 🧩 Modular components with clean structure

## 🛡️ Licensing
Licensed under the MIT License.  
All code, design, and branding are © 2025 Vasilis.  
Crafted with clarity. Exported with soul. Namaste.

## 🚀 Demo
Live at [vasifanesapp.com](https://www.vasifanesapp.com)

## 🧠 Philosophy
Citizen Report is not just a dashboard.  
It’s a voice. A tool. A poetic interface for civic clarity.  
Every export is a message. Every pixel is a choice.  
Namaste.

>>>>>>> 8135780e4c12dfc8c0c7b35c0dbdec0126292066
