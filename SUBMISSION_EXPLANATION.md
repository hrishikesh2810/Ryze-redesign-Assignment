# Design & Structural Decisions - Ryze Redesign

## 1. Design Decisions

### **Color Palette & Branding**
We moved away from the previous cluttered light theme to a **"Dark Mode First" aesthetics** (`bg-void` #0A0A0A) heavily influenced by modern developer tools (like Vercel, Raycast, Linear).
*   **Primary Accent (Ember):** `#FF4801`. Chosen for its high energy and contrast against the dark background, symbolizing speed and action.
*   **Typography:** We paired **Plus Jakarta Sans** (Headings) for its geometric, modern tech feel with **Inter** (Body) for unmatched legibility in dense data contexts.

### **Layout Choices**
*   **Bento Grid:** The "Capabilities" section uses a Bento-style grid. This breaks away from standard "row-after-row" layouts, making the features feel like a cohesive dashboard.
*   **Glassmorphism:** Subtle transparent borders and backgrounds (`bg-white/5`) are used on cards to create depth without visual weight.

---

## 2. UX Improvements

### **Navigation & Hierarchy**
*   **Fixed Navigation:** The navbar is now sticky with a backdrop blur, ensuring the "Get Started" CTA is always accessible.
*   **Clearer Product Definition:** The Hero section explicitly states "Autonomous AI Media Buyer" instead of vague marketing terms. The dashboard visualization immediately grounds the user in *what the product is*.
*   **Call-to-Action:** CTAs were upgraded from generic buttons to high-visibility elements. The "Audit My Account" CTA is prioritized to capture high-intent leads.

---

## 3. Modular Architecture

### **Component-Based Structure**
The codebase is strictly modular. Every major UI part is a standalone component in `/components`:
*   `/sections` contains page-level blocks (Hero, Features, Footer).
*   `/ui` contains atomic elements (Buttons, Inputs).
*   `/layout` contains global wrappers (Navbar).

This allows the marketing team to "mix and match" sections to create new landing pages without writing code.

---

## 4. Mobile & Accessibility

### **Responsive Design**
*   **Fluid Grids:** All grids (Features, Testimonials) automatically stack from `grid-cols-3` to `grid-cols-1` on mobile.
*   **Touch Targets:** All interactive elements meet the minimum 44px height requirement.

### **Accessibility (a11y)**
*   **Semantic HTML:** We use proper `<main>`, `<section>`, `<nav>`, and `<header>` tags.
*   **Reduced Motion:** Animations use `framer-motion` but can be easily disabled or respected via `prefers-reduced-motion` queries in the future.
*   **Contrast:** Text colors (Zinc-400 on Black) were carefully selected to pass WCAG AA standards.
