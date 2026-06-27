# WDD 131: Dynamic Web Fundamentals
## Course Landing Page - Week 01 Assignment

This repository serves as the central hub for my work in **WDD 131: Dynamic Web Fundamentals** at BYU-Idaho. The main landing page applies modern frontend standards using semantic HTML, responsive CSS layouts (Flexbox and Grid), and dynamic JavaScript functionality.

## Project Details

* **Course Website:** WDD 131 – Dynamic Web Fundamentals
* **Developer:** [Your Name Here]
* **Live Deployment Link:** [https://github.com/JohnOlshea/wdd131.git](https://github.com/JohnOlshea/wdd131.git)

---

## Core Features & Requirements Met

### 📂 File & Directory Structure
The repository is strictly organized using clean architecture guidelines:
* `/index.html` - The central entry point for the landing page.
* `/styles/base.css` - Custom structural layout and specific theme/typography stylings.
* `/scripts/getdates.js` - Embedded site script loaded optimally using the `defer` attribute.
* `/images/` - Local directory storing fully web-optimized images (no absolute external HTTP dependencies).

### 🌐 Semantic HTML & SEO
* Built using accessible layout milestones: `<header>`, `<nav>`, `<main>`, and `<footer>`.
* Head elements feature precise SEO optimization tags (`meta charset`, `meta viewport`, descriptive `meta author`, and structured page descriptions targeting proper indexing parameters).

### 🎨 Responsive CSS Design
* **Flexbox Navigation:** A top nav menu utilizing modern hover actions for visual feedback.
* **Grid Card Layouts:** A centered, max-width content container leveraging `CSS Grid` to separate the bio card component from the course resources dashboard.
* **Typography:** Integrates stylized fonts sourced cleanly from the Google Fonts API.

### ⚡ Dynamic JavaScript
* Script execution safely handles DOM processing elements by utilizing `defer` on script tags.
* Programmatically targets the DOM using localized scripts to calculate and display the live current copyright year and document `.lastModified` timestamp data dynamically.

---

## Testing & Performance Audits
To maintain elite production-level performance, the following validation benchmarks were checked:
1. **Lighthouse Audit:** Scored high performance indices on **Accessibility**, **Best Practices**, and **SEO**.
2. **Page Weight Optimizations:** Enforced strict control rules ensuring overall initial payload weight rests soundly under the **500 kB limit** via image optimization protocols.
3. **Cross-Platform Integrity:** Debugged local scripts via browser DevTools and checked rendering pipelines using Incognito viewports.

---

## How to Run & View Locally

1. Clone this repository to your desktop machine:
   ```bash
   git clone [https://github.com/JohnOlshea/wdd131.git](https://github.com/JohnOlshea/wdd131.git)