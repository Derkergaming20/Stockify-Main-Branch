const modal = document.getElementById("modalOverlay");
const addItemBtn = document.getElementById("addItemBtn");
const closeModal = document.getElementById("closeModal");

addItemBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Add Item Form Submission
document.getElementById("addItemForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const itemNumber = document.getElementById("itemNumber").value;
  const itemName = document.getElementById("itemName").value;
  const itemDescription = document.getElementById("itemDescription").value;
  const itemQuantity = document.getElementById("itemQuantity").value;

  const tableBody = document.getElementById("tableBody");
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
