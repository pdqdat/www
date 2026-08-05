# Project Rules & Coding Standards

This file defines the overarching rules, tech stack, and conventions inferred from the current project structure. These rules should be strictly adhered to during development.

## 1. Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite (using `@vitejs/plugin-react-swc`)
- **Routing**: React Router v7
- **Animation**: Framer Motion (`motion/react`)
- **Styling**: SCSS (Sass) Modules

## 2. File & Directory Structure
- **Components (`src/components/`)**: Use PascalCase for component files (e.g., `BackgroundOrb.jsx`, `Layout.jsx`).
- **Pages (`src/pages/`)**: Use PascalCase for page route components.
- **UI Components (`src/components/ui/`)**: For reusable, atom-level UI components (e.g., `CustomCursor.jsx`, `Button.jsx`).
- **Styles (`src/scss/`)**: Global styles and utility SCSS files. 

## 3. Styling Rules
- **CSS Modules**: Always use CSS Modules for component-specific styling (e.g., `ComponentName.module.scss`).
- **Global Variables/Mixins**: Do not manually import `@use "@/scss/utils"` in your module files. The Vite config automatically injects `src/scss/utils` into every SCSS file.
- **Class Naming**: Use camelCase for CSS module classes (e.g., `.myContainer { ... }`) to make them easily accessible in JSX via `styles.myContainer`.

## 4. Import Aliases
Always prefer path aliases over relative paths (`../../`) for cleaner imports. The following aliases are configured in `vite.config.js`:
- `@` -> `src/`
- `@comp` -> `src/components/`
- `@ui` -> `src/components/ui/`
- `@pages` -> `src/pages/`
- `@hooks` -> `src/hooks/`
- `@utils` -> `src/utils/`
- `@assets` -> `src/assets/`

## 5. React & JSX Conventions
- Use functional components and React Hooks.
- Do not use `React.FC` or import `React` directly unless absolutely necessary (React 17+ JSX transform is in use).
- **ESLint**: Unused variables are treated as errors unless they start with a capital letter or underscore (e.g., `_unusedVar`).

## 6. Animations
- Rely on `framer-motion` for complex physics, state-based animations, and staggered entrances. 
- Import from `motion/react` (e.g., `import { motion } from "motion/react";`).

## 7. Import Standards
When using imports in any file across this project, always adhere to the following ordering and spacing rules:
1. **External Libraries First**: Put all imports from external libraries (e.g., `react`, `react-router`, `motion/react`) at the very top of the file.
2. **Empty Line Separator**: Insert exactly one empty line after the block of external library imports.
3. **Internal/Project Imports**: Put all imports referencing internal project files (e.g., `@comp/...`, `../utils`, `./styles.module.scss`) below the empty line.

**Example**:
```javascript
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import PageTitle from "@comp/PageTitle";
import SocialLinks from "@comp/SocialLinks";
import styles from "./AboutPage.module.scss";
```
