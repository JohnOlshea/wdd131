# WDD 131: Dynamic Web Fundamentals

This repository contains my weekly assignments for **WDD 131: Dynamic Web Fundamentals** at BYU-Idaho. Each assignment applies modern frontend standards using semantic HTML, responsive CSS, and dynamic JavaScript.

## Project Details

* **Course:** WDD 131 – Dynamic Web Fundamentals
* **Developer:** John Akala
* **Live Site:** [https://johnolshea.github.io/wdd131/](https://johnolshea.github.io/wdd131/)

---

## Assignments

### Week 01 – Course Landing Page (`/index.html`)

The central hub landing page for the course.

**File Structure**
* `/index.html` – Landing page entry point
* `/styles/base.css` – Layout, theme, and typography styles
* `/scripts/getdates.js` – Dynamic footer script (deferred)
* `/images/` – Locally optimized images

**Features**
* Semantic HTML5 layout: `<header>`, `<nav>`, `<main>`, `<footer>`
* Flexbox navigation with hover effects
* CSS Grid card layout (bio + course resources)
* Google Fonts integration
* Dynamic copyright year and `lastModified` date via JavaScript

---

### Week 02 – Temple Picture Album (`/temples.html`)

A responsive picture album page featuring a hamburger navigation menu and CSS Grid image layout.

**File Structure**
* `/temples.html` – Temple album page
* `/styles/temples.css` – Mobile-first base styles
* `/styles/temples-large.css` – Larger screen overrides (tablet/desktop)
* `/scripts/temples.js` – Hamburger menu toggle and dynamic footer
* `/images/` – Locally optimized temple images

**Features**
* Mobile-first responsive design (1 → 2 → 3 column grid)
* Hamburger menu with X-close toggle (JavaScript-driven)
* CSS Flex navigation with hover effects
* CSS Grid figure layout using `aspect-ratio` locked images
* Dynamic copyright year and `lastModified` date via JavaScript
* Google Fonts: Merriweather + Open Sans

---

## Performance Standards (All Assignments)

* Lighthouse scores of **95+** on Accessibility, Best Practices, and SEO
* Page weight under **500 kB**
* Zero color contrast errors at WCAG AA level
* Validated with the BYU-I Page Audit Tool

---

## Running Locally

```bash
git clone https://github.com/JohnOlshea/wdd131.git
cd wdd131
# Open any .html file with Live Server in VS Code
```