# Ryze.ai Redesign - Assignment Submission

## Project Overview
This repository contains the completely redesigned frontend for Get-Ryze.ai. The project focuses on a premium, dark-mode-first aesthetic suitable for a high-tech AI SaaS product.

**Tech Stack:**
*   **Framework:** Next.js 14+ (App Router)
*   **Styling:** Tailwind CSS v4
*   **Icons:** Lucide React
*   **Animations:** Framer Motion
*   **Language:** TypeScript

---

## 🚀 How to Run Locally

1.  **Clone the repository** & install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Start the dev server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📦 Deployment Instructions

### 1. Push to GitHub
If you haven't already:
```bash
git init
git add .
git commit -m "Initial commit of Ryze Redesign"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ryze-redesign.git
git push -u origin main
```

### 2. Deploy to Vercel (Recommended)
1.  Go to [Vercel.com](https://vercel.com) and log in.
2.  Click **"Add New"** > **"Project"**.
3.  Select your GitHub repository (`ryze-redesign`).
4.  Vercel will auto-detect Next.js.
5.  Click **"Deploy"**.

### 3. Deploy to Netlify
1.  Go to Netlify and click **"New site from Git"**.
2.  Connect GitHub and select the repo.
3.  Build Command: `npm run build`
4.  Publish Directory: `.next` (Netlify usually auto-detects Next.js).
5.  Click **"Deploy Site"**.

---
