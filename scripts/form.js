// Product data array (provided by assignment)
const products = [
  { id: "fc-1888", name: "flux capacitor",    averagerating: 4.5 },
  { id: "fc-2050", name: "power laces",        averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits",      averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor",averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer",     averagerating: 5.0 }
];

// Dynamically populate the product select
const productSelect = document.getElementById("product-name");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;          // id used as value per requirements
  option.textContent = product.name;  // name used for display
  productSelect.appendChild(option);
});

// Set last modified date in footer
const modDate = document.getElementById("mod-date");
if (modDate) {
  modDate.textContent = document.lastModified;
}