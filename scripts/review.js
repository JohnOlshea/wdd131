// ── localStorage counter ──────────────────────────────────────────────────
// Increment review count every time this confirmation page loads
const STORAGE_KEY = "reviewCount";

let count = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
count += 1;
localStorage.setItem(STORAGE_KEY, count);

document.getElementById("review-count").textContent = count;

// ── Parse URL query params and display a summary ──────────────────────────
const params = new URLSearchParams(window.location.search);

// Product id → friendly name lookup (mirrors the form's array)
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" }
];

function productName(id) {
  const found = products.find(p => p.id === id);
  return found ? found.name : id;
}

function starDisplay(value) {
  const n = parseInt(value, 10);
  if (!n) return "—";
  return "★".repeat(n) + "☆".repeat(5 - n) + ` (${n}/5)`;
}

// Build summary rows
const summaryRows = [
  { label: "Product",           value: productName(params.get("productName")) },
  { label: "Rating",            value: starDisplay(params.get("rating")) },
  { label: "Install Date",      value: params.get("installDate") || "—" },
  { label: "Useful Features",   value: params.getAll("features").join(", ") || "None selected" },
  { label: "Written Review",    value: params.get("writtenReview") || "—" },
  { label: "Reviewer",          value: params.get("userName") || "Anonymous" }
];

const summarySection = document.getElementById("review-summary");

summaryRows.forEach(row => {
  const div = document.createElement("div");
  div.className = "summary-row";

  const labelSpan = document.createElement("span");
  labelSpan.className = "summary-label";
  labelSpan.textContent = row.label + ":";

  const valueSpan = document.createElement("span");
  valueSpan.className = "summary-value";
  valueSpan.textContent = row.value;

  div.appendChild(labelSpan);
  div.appendChild(valueSpan);
  summarySection.querySelector("h3").after(div); // insert after heading
  summarySection.appendChild(div);
});

// ── Last modified date ────────────────────────────────────────────────────
const modDate = document.getElementById("mod-date");
if (modDate) {
  modDate.textContent = document.lastModified;
}