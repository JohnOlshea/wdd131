/* ================================================================
   filtered-temples.js
   – Temple data array (10 entries)
   – Dynamic card rendering
   – Nav filter logic
   – Footer: copyright year + last modified
   ================================================================ */

/* ---- Temple Data ---- */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  /* ---- Three additional entries ---- */
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Provo Utah Rock Canyon Temple",
    location: "Provo, Utah United States",
    dedicated: "1969, September, 15",
    area: 163000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-utah-rock-canyon-temple/provo-utah-rock-canyon-temple-45659-main.jpg"
  }
];

/* ---- Helpers ---- */

/**
 * Extract the four-digit dedication year from a string like "2005, August, 7".
 * @param {string} dedicated
 * @returns {number}
 */
function getDedicationYear(dedicated) {
  return parseInt(dedicated.split(",")[0].trim(), 10);
}

/**
 * Build a single temple <figure> card and append it to the grid.
 * @param {Object} temple
 * @param {HTMLElement} grid
 */
function createTempleCard(temple, grid) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src     = temple.imageUrl;
  img.alt     = temple.templeName + " Temple";
  img.loading = "lazy";
  img.width   = 400;
  img.height  = 250;

  const name = document.createElement("h2");
  name.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

  const dedicated = document.createElement("p");
  dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

  const caption = document.createElement("figcaption");
  caption.appendChild(name);
  caption.appendChild(location);
  caption.appendChild(dedicated);
  caption.appendChild(area);

  figure.appendChild(img);
  figure.appendChild(caption);
  grid.appendChild(figure);
}

/**
 * Filter and render temple cards based on the chosen filter key.
 * @param {string} filter  – "home" | "old" | "new" | "large" | "small"
 */
function displayTemples(filter) {
  const grid    = document.getElementById("temple-grid");
  const heading = document.getElementById("filter-heading");

  /* Clear existing cards */
  grid.innerHTML = "";

  let filtered;
  let headingText;

  switch (filter) {
    case "old":
      filtered    = temples.filter(t => getDedicationYear(t.dedicated) < 1900);
      headingText = "Old Temples (before 1900)";
      break;
    case "new":
      filtered    = temples.filter(t => getDedicationYear(t.dedicated) > 2000);
      headingText = "New Temples (after 2000)";
      break;
    case "large":
      filtered    = temples.filter(t => t.area > 90000);
      headingText = "Large Temples (> 90,000 sq ft)";
      break;
    case "small":
      filtered    = temples.filter(t => t.area < 10000);
      headingText = "Small Temples (< 10,000 sq ft)";
      break;
    default:
      filtered    = temples;
      headingText = "Home";
  }

  heading.textContent = headingText;
  filtered.forEach(temple => createTempleCard(temple, grid));
}

/* ---- Nav filter click handler ---- */
const primaryNav = document.getElementById("primary-nav");
const navLinks   = primaryNav ? primaryNav.querySelectorAll("a[data-filter]") : [];

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    /* Update active state */
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    /* Close mobile menu */
    primaryNav.classList.remove("open");
    const hamburger = document.getElementById("hamburger");
    if (hamburger) hamburger.setAttribute("aria-expanded", "false");

    displayTemples(link.dataset.filter);
  });
});

/* ---- Hamburger menu toggle ---- */
const hamburger = document.getElementById("hamburger");

if (hamburger && primaryNav) {
  hamburger.addEventListener("click", function () {
    const isOpen = primaryNav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest("header") && primaryNav.classList.contains("open")) {
      primaryNav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      primaryNav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---- Footer: dynamic year + last modified ---- */
const yearEl = document.getElementById("copy-year");
const modEl  = document.getElementById("last-modified");
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl)  modEl.textContent  = document.lastModified;

/* ---- Initial render: Home (all temples) ---- */
displayTemples("home");