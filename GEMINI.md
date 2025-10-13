# Gemini Project Guide for Luxetrail

This document outlines the key technologies, architectural patterns, and conventions observed in the Luxetrail project, serving as a guide for the Gemini agent.

## Project Overview

*   **Framework:** Next.js (v15.5.2, App Router)
*   **Language:** TypeScript (v5.9.2)
*   **Package Manager:** Yarn (v4.9.2)
*   **Styling:**
    *   Tailwind CSS (v4.1.14) with PostCSS and `tailwindcss-animate` plugin.
    *   `@emotion/react`, `@emotion/styled`
    *   `styled-components` (enabled in `next.config.js`)
    *   Utility classes: `class-variance-authority`, `clsx`, `tailwind-merge`
*   **UI Libraries:**
    *   Material UI v6 (`@mui/material`, `@mui/icons-material`)
    *   Radix UI (`@radix-ui/react-avatar`, `@radix-ui/react-icons`, `@radix-ui/react-label`, `@radix-ui/react-slot`, `@radix-ui/react-switch`)
*   **Animation:** `framer-motion`, `motion`
*   **Fonts:** `@fontsource/inter`, `@fontsource/poppins`

## Branding & Theme Configuration

*   **Primary Color:** Deep Royal Blue `#0B3D91`
*   **Secondary Color:** Warm Gold `#F9A826`
*   **Background:** Soft Gray-Blue `#F4F6FA`
*   **Text:** Neutral Black `#000000`
*   **Typography:**
    *   Headings: Poppins or Montserrat (bold, clean, geometric)
    *   Body: Inter or Lato (modern, readable)
    *   Consistent hierarchy (H1 > H2 > H3 > Body1)
*   **Styling Guidelines:**
    *   Rounded corners (border-radius: 12px)
    *   Even vertical padding (80px per section)
    *   Generous whitespace between grids
    *   Shadow elevation for interactive cards and buttons

## Global Structure & Layout

*   **App Layout (`src/app/layout.tsx`):** Defines universal structure.
    *   Uses `AppBar` (transparent or white background).
    *   Navigation links: Home, About, Our Programs, Hire, Book, Contact.
    *   Persistent CTA Button: “Book a Slot.”
    *   Wraps pages with `Container` for horizontal spacing.
    *   Includes a `Footer` component.

## Directory Structure

*   `src/app`: Next.js application routing and root layout.
    *   `globals.css`: Global styles, likely including Tailwind base styles and custom CSS variables.
    *   `layout.tsx`: Root layout component.
    *   `page.tsx`: Root page component.
*   `src/components`: Reusable UI components.
    *   `home`: Section-specific components for the homepage (e.g., `HeroSection`, `AboutSection`, `TrainingSection`, `B2BSection`, `HireConsultantSection`, `AdvertiseSection`, `SocialCarouselSection`, `BookSlotSection`, `ContactSection`).
    *   `layout`: Layout-related components (e.g., `AppBar`, `Footer`).
    *   `magicui`: Custom UI components, potentially for animations or unique visual effects.
    *   `ui`: Generic, reusable UI primitives (e.g., `avatar`, `button`, `label`, `switch`, `text-reveal`).
*   `src/lib`: Utility functions and helper modules.
*   `public`: Static assets (images, fonts, etc.).

## Configuration Files

*   **`next.config.js`**:
    *   `reactStrictMode: true`
    *   `compiler.styledComponents: true`
*   **`tailwind.config.js`**:
    *   `darkMode: ["class"]`
    *   `content`: Configured to scan `pages`, `components`, `app`, and `src` for Tailwind classes.
    *   `theme.extend`: Custom color palette and border radii defined using CSS variables (HSL values).
    *   `plugins`: `tailwindcss-animate`.

## Development Practices

*   **Component-Based Architecture:** Strong emphasis on reusable components.
*   **Mixed Styling Approach:** Utilizes Tailwind CSS for utility-first styling, Material UI for pre-built components, and `styled-components`/Emotion for component-scoped styling or more complex CSS-in-JS needs. When adding new styles, prioritize Tailwind CSS for general styling, and use `styled-components` or Emotion for component-specific, dynamic styles where Tailwind might be less suitable.
*   **TypeScript:** All new code should be written in TypeScript, adhering to strict typing.
*   **Linting:** `next lint` is used, indicating adherence to Next.js and React best practices.
*   **Yarn:** Use `yarn` for all package management operations.
*   **Theming:** Wrap entire app with `ThemeProvider` and `CssBaseline`. Define `theme.ts` with brand colors, typography, and global shape.
*   **Section Wrappers:** Use `styled(Box)` or `styled(Container)` for section wrappers.
*   **Vertical Rhythm:** Maintain a consistent vertical rhythm (use `theme.spacing(10)` or fixed 80px padding).
*   **Image Optimization:** Use Next.js `<Image>` for optimized images and `<Head>` for SEO meta tags.
*   **Mobile Responsiveness:** Ensure mobile responsiveness via MUI Grid breakpoints (xs, md, lg).

## Gemini Specific Instructions

*   **Conventions:** Adhere strictly to existing project conventions for naming, formatting, and architectural patterns.
*   **Styling:** When modifying or adding styles, observe the existing mix of Tailwind CSS, Material UI, and styled-components. Prioritize Tailwind for new general-purpose styling.
*   **Component Usage:** Leverage existing UI components from `@mui/material`, Radix UI, or custom components in `src/components/ui` and `src/components/magicui` where appropriate.
*   **Testing:** If tests are present, ensure new features or bug fixes are accompanied by relevant tests, and existing tests pass.
*   **Verification:** Always run `yarn lint` and `yarn build` after making changes to ensure code quality and successful compilation.
*   **Currency:** The currency for this project is always Kes.
*   **Frontend API Guide for Company Owners:** This guide provides an overview of the API endpoints relevant to company owners for managing products, orders, pickup locations, and company settings. Base URL: Your Django backend URL (e.g., `http://localhost:8000/`). It includes details on Authentication, Product Management, Order Management, Pickup Location Management, and Company Settings Endpoints, including HTTP methods, URLs, request/response bodies, and authentication requirements.
*   **Grid Component Usage:** When using the Grid component, use the `size` prop with an object for breakpoints, e.g., `size={{ xs: 12, md: 6 }}`, instead of individual props like `xs={12} md={6}`.