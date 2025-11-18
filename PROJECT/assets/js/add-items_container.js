const modal = document.getElementById("modalOverlay");
const addItemsBtn = document.getElementById("addItemsBtn");
const cancelBtn = document.getElementById("cancelItem-Btn");

// Open modal when clicking "ADD ITEMS"
addItemsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");
});

// Close modal when clicking cancel button
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("addItemForm").reset();
  modal.classList.remove("active");
});

// Close modal when clicking outside the container
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    document.getElementById("addItemForm").reset();
    modal.classList.remove("active");
  }
});

// Add Item Form Submission
document.getElementById("addItemForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const itemName = document.getElementById("itemName").value;
  const itemDescription = document.getElementById("itemDescription").value;
  const itemQuantity = document.getElementById("itemQuantity").value;

  const tableBody = document.getElementById("tableBody");

  // Auto-generate item number based on existing rows
  const currentRows = tableBody.querySelectorAll("tr").length;
  const itemNumber = String(currentRows + 1).padStart(3, "0");

  const newRow = tableBody.insertRow();

  newRow.innerHTML = `
    <td>${itemNumber}</td>
    <td>${itemName}</td>
    <td>${itemDescription}</td>
    <td>${itemQuantity}</td>
  `;

  // Reset form and hide modal
  document.getElementById("addItemForm").reset();
  modal.classList.remove("active");
});

// Search Functionality
document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const rows = document.querySelectorAll("#tableBody tr");
  const noResults = document.querySelector(".no-results");
  let visibleCount = 0;

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
});
