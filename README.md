# Personal Website

A minimalist, responsive portfolio website to showcase my software projects, skills, and resume.

### 🌐 Live Demo  
[www.adityapatel.fyi](https://www.adityapatel.fyi)

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Build Tool**: Vite
- **Hosting**: Vercel

---

## 📌 Features

- Clean, single-page layout inspired by [Tyler Taewook’s site](https://www.tylertaewook.com/)
- Responsive design with grid-based layout and mobile-friendly behavior
- Organized into “Currently”, “Previously”, and “Projects” sections
- Smooth transitions and animations using Tailwind and Framer Motion
- Custom favicon and domain setup (`adityapatel.fyi`)
- Easily extensible with new projects, sections, or layout tweaks

---

## 🚀 Getting Started

To run the site locally:

```bash
git clone https://github.com/AdityaPtl/personal-website.git
cd personal-website
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

---

## 📁 Project Structure

- `src/` – All source code
  - `components/` – Reusable UI blocks (Navbar, Layout, ProjectCard, etc.)
  - `data/` – Data for the “Currently”, “Previously”, and “Projects” sections
  - `App.jsx` – Top-level layout and structure
  - `main.jsx` – React entry point
- `public/` – Static assets (e.g. `favicon.ico`)
- `vite.config.js` – Vite configuration file
