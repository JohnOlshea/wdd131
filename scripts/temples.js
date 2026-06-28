
/* ---- Footer: dynamic copyright year + last modified ---- */
const yearEl = document.getElementById('copy-year');
const modEl  = document.getElementById('last-modified');

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl)  modEl.textContent  = document.lastModified;

/* ---- Hamburger menu toggle ---- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  /* Close when any mobile nav link is clicked */
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close when clicking outside the header */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('header') && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* Close and reset on resize to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}