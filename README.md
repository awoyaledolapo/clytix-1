# clytix-1

A modern, responsive ticket management web app built with **React 18**, **Vite**, and **Supabase**.
Features include secure authentication, multi-page dashboard, ticket tracking, and reusable UI components.

---

## Frameworks & Libraries Used

- **Framework:** React 18  
- **Routing:** React Router DOM  
- **Forms & Validation:** React Hook Form + Zod  
- **Styling:** Tailwind CSS  
- **Build Tool:** Vite  
- **State Management:** React `useState` and `useEffect`  
- **Custom Hooks:** `useToast` for notifications, `useContext` for global state
- Backend / Data Layer: Supabase (authentication, ticket data management)

---

## Setup & Execution

1. **Clone the repository**  
```bash
git clone <repo-url>
cd myapp
## Project Structure & UI Components
- Pages: Main, Login, SignUp, Dashboard, Tickets, NotFound
- Components: Navbar, Toaster, TooltipProvider, Forms
- State Management: useState, useEffect, useToast

## Accessibility
- Keyboard-accessible elements
- ARIA labels for forms
- Screen-reader friendly validation messages

## Project Structure & UI Components
- Pages: Main, Login, SignUp, Dashboard, Tickets, NotFound
- Components: Navbar, Toaster, TooltipProvider, Forms
- State Management: useState, useEffect, useToast

## Accessibility
- Keyboard-accessible elements
- ARIA labels for forms
- Screen-reader friendly validation messages

## Known Issues
- Validation messages may overlap on mobile devices.
- Minor layout issues on very small screens.


## Example Test User Credentials
- Email: testuser@example.com
- Password: Password123

## Notes
- Lazy-loading implemented with React.lazy + Suspense
- Tailwind CSS for responsive styling

## License
Open-source and free to use

## Example Test User Credentials
- Email: testuser@example.com
- Password: Password123

## Notes
- Lazy-loading implemented with React.lazy + Suspense
- Tailwind CSS for responsive styling

## License
Open-source and free to use

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

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
