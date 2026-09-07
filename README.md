# Dat Phan's Personal Website

Personal website and portfolio for Dat Phan.

## Tech Stack

This project is built with a modern frontend stack:

- **[React](https://react.dev/)** (v19) - UI library
- **[React Router](https://reactrouter.com/)** (v7) - Client-side routing
- **[Vite](https://vitejs.dev/)** (v6) - Build tool and development server. Configured with [SWC](https://swc.rs/) for blazing-fast Hot Module Replacement (HMR) and optimized builds.
- **[Sass](https://sass-lang.com/)** - CSS extension language for styling. Configured to automatically inject global utility variables and mixins into all stylesheets.
- **[Framer Motion](https://motion.dev/)** - Animation library

## Project Structure

- `src/pages/` - Page components (`Home`, `AboutPage`, `ContactPage`, etc.)
- `src/components/` - Reusable UI components and main layout
- `src/scss/` - Global styles and Sass configuration
- `src/assets/` - Static assets like images and fonts
- `src/config/` - Configuration files

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or yarn/pnpm)

### Installation

1. Clone the repository and navigate to the project directory:

    ```bash
    git clone <repository-url>
    cd www
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Scripts

- **`npm run dev`**: Starts the development server with Hot Module Replacement (HMR) at `http://localhost:5173`.
- **`npm run build`**: Builds the application for production. The output will be in the `dist/` directory.
- **`npm run preview`**: Bootstraps a local static web server that serves the files from `dist/` for previewing the production build.
- **`npm run lint`**: Runs ESLint to check for code quality and formatting issues.
