# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Overview

This project is a React application built using Vite as the build tool. It uses Redux Toolkit for state management and includes several reusable components styled with CSS.

## File Structure

- `src/` - Contains the source code for the application
  - `components/` - React components such as Home, About, Cart, Navbar, and Footer
  - `redux/` - Redux Toolkit store and slices for state management
    - `store.js` - Configures the Redux store
    - `slices/` - Contains Redux slices, e.g., `cartSlice.js`
  - `App.jsx` - Main application component
  - `main.jsx` - Entry point for React rendering
  - `App.css` - Global styles for the application
- `public/` - Static assets like images and icons
- `index.html` - Main HTML file served by Vite
- `package.json` and `package-lock.json` - Project dependencies and lock file
- `vite.config.js` - Configuration file for Vite
- `.gitignore` - Specifies files and folders to be ignored by Git
- `eslint.config.js` - ESLint configuration for code linting

## Technologies Used

- React - JavaScript library for building user interfaces
- Redux Toolkit - State management library for React
- Vite - Fast build tool and development server
- ESLint - Code linting tool to maintain code quality
- CSS - Styling for components and layout

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:3000`).
