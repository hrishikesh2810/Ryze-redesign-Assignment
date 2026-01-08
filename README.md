# Ryze.ai Redesign - Assignment Submission

## Project Overview
This repository contains the completely redesigned frontend for **Get-Ryze.ai**. The project focuses on a premium, "Dark Mode First" aesthetic suitable for a high-tech AI SaaS product, implemented using a lightweight, high-performance stack.

**Tech Stack:**
*   **Core:** HTML5, Vanilla JavaScript
*   **Styling:** Tailwind CSS v3
*   **Build Tool:** Vite
*   **Fonts:** Inter & Outfit (Google Fonts)

---

## 🚀 How to Run Locally

1.  **Clone the repository** & install dependencies:
    ```bash
    npm install
    ```

2.  **Start the dev server**:
    ```bash
    npm run dev
    ```

3.  Open the link provided in the terminal (usually `http://localhost:5173`) to view the site.

---

## 📦 Deployment Instructions

### Deploy to Vercel (Recommended)
This project is pre-configured for Vercel.

1.  Push this code to your GitHub repository.
2.  Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3.  Import your repository.
4.  Vercel will detect the `vercel.json` config and deploy automatically.
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`

### Manual Build
To build the static files for production:
```bash
npm run build
```
The output will be in the `dist/` folder, ready to be hosted on any static site hosting service (Netlify, GitHub Pages, etc.).

---

## 📄 Documentation
For a detailed explanation of design decisions and architecture, please see [SUBMISSION_EXPLANATION.md](./SUBMISSION_EXPLANATION.md).
