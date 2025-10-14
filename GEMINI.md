
# Gemini Code Assistant Documentation

This document provides a comprehensive guide for developers working on the Luxe Trail Consultancy website. It outlines the project's architecture, development practices, and key conventions to ensure consistency and efficiency.

## 1. Project Overview

Luxe Trail Consultancy is a web application built with Next.js, TypeScript, and Material-UI (MUI). It serves as the online presence for a consultancy firm that trains and connects tour and travel professionals. The application features a modern, responsive design with a multi-section homepage.

-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **UI Library**: Material-UI (MUI) v5
-   **Styling**: `styled-components` integrated with MUI
-   **Code Quality**: ESLint and Prettier (inferred from `lint` script)

## 2. Development Environment

To get started with the development server, follow these steps:

1.  **Install Dependencies**:
    ```bash
    yarn install
    ```

2.  **Run the Development Server**:
    ```bash
    yarn dev
    ```

The application will be available at `http://localhost:3000`.

### Available Scripts

-   `yarn dev`: Starts the development server.
-   `yarn build`: Creates a production build of the application.
-   `yarn start`: Starts the production server.
-   `yarn lint`: Lints the codebase for errors and style issues.

## 3. Project Structure

The project follows a standard Next.js (App Router) structure. Key directories and files include:

-   `src/app/`: Contains the main application pages and layouts.
    -   `layout.tsx`: The root layout, which includes the theme provider, CSS baseline, `AppBar`, and `Footer`.
    -   `page.tsx`: The homepage, which assembles the various sections from `src/components/home`.
-   `src/components/`: Reusable React components.
    -   `home/`: Components specific to the homepage sections (e.g., `HeroSection`, `AboutSection`).
    -   `layout/`: Global layout components like `AppBar` and `Footer`.
-   `src/lib/`: Utility files and libraries.
    -   `registry.tsx`: Handles the integration of `styled-components` with Next.js server-side rendering.
-   `src/theme.ts`: The central hub for the application's design system. It defines the color palette, typography, and global component styles.
-   `guide.md`: The master guide for design and implementation, containing detailed specifications for branding, components, and technical practices. **All developers should read this file thoroughly.**
-   `public/`: Static assets like images and fonts.

## 4. Styling and Theme

The project uses Material-UI for its component library and `styled-components` for custom styling.

### Theme

The application's theme is defined in `src/theme.ts`. It includes:

-   **Palette**:
    -   `primary`: `#0B3D91` (Deep Royal Blue)
    -   `secondary`: `#F9A826` (Warm Gold)
    -   `background`: `#F4F6FA` (Soft Gray-Blue)
-   **Typography**:
    -   Headings: `Poppins`
    -   Body: `Inter`
-   **Shape**:
    -   `borderRadius`: `12px`

When creating new components, always use theme values for colors, spacing, and typography to maintain a consistent look and feel.

**Example**:

```tsx
import { Box, styled } from '@mui/material';

const MyStyledComponent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
}));
```

### Styling Conventions

-   Use the `styled()` utility from MUI for creating custom styled components.
-   For responsive design, use MUI's `Grid` component and breakpoint system (`xs`, `sm`, `md`, `lg`, `xl`).
-   Maintain a consistent vertical rhythm with even padding (`80px` or `theme.spacing(10)`) for each major section.

## 5. Component Guide

The application is built with a modular component architecture.

### Existing Components

-   **Layout**: `AppBar` and `Footer` provide the consistent site-wide header and footer.
-   **Homepage Sections**: The `src/components/home` directory contains all the sections for the homepage. Each component is self-contained and corresponds to a section in the `guide.md`.

### Creating New Components

1.  **File Location**: Place new components in the appropriate subdirectory within `src/components/`.
2.  **Styling**: Use the `styled()` utility and the MUI theme.
3.  **Props**: Define clear and typed props for each component.
4.  **Responsiveness**: Ensure the component is fully responsive across all screen sizes.
5.  **Documentation**: Add comments to explain complex logic.

## 6. Deployment

The application is intended for deployment on Vercel. The `yarn build` command will generate the optimized production-ready files in the `.next` directory.

### Pre-Deployment Checklist

-   [ ] Ensure all code is linted (`yarn lint`).
-   [ ] Verify mobile-friendly layouts.
-   [ ] Check for accessibility issues (e.g., color contrast, ARIA attributes).
-   [ ] Confirm that all forms and interactive elements work as expected.
-   [ ] Run a Lighthouse audit to check for performance and SEO.
