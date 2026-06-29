/* ---- Footer: dynamic copyright year + last modified ---- */
const yearEl = document.getElementById('copy-year');
const modEl  = document.getElementById('last-modified');

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl)  modEl.textContent  = document.lastModified;

/* ---- Hamburger menu toggle ---- */
const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('primary-nav');

if (hamburger && primaryNav) {
  hamburger.addEventListener('click', function () {
    const isOpen = primaryNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  /* Close when any nav link is clicked */
  primaryNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      primaryNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close when clicking outside the header */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('header') && primaryNav.classList.contains('open')) {
      primaryNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* Close and reset on resize to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      primaryNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}