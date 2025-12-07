function toggleMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
      }

      // Close menu when clicking outside
      document.addEventListener("click", function (event) {
        const nav = document.querySelector("nav");
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.getElementById("navLinks");

        if (
          !nav.contains(event.target) &&
          navLinks.classList.contains("active")
        ) {
          navLinks.classList.remove("active");
        }
      });

      // Search functionality
      function searchTable() {
        const input = document.getElementById("searchInput");
        const filter = input.value.toUpperCase();
        const table = document.getElementById("itemsTable");
        const tr = table.getElementsByTagName("tr");

        for (let i = 1; i < tr.length; i++) {
          let found = false;
          const td = tr[i].getElementsByTagName("td");

          for (let j = 0; j < td.length; j++) {
            if (td[j]) {
              const txtValue = td[j].textContent || td[j].innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                found = true;
                break;
              }
            }
          }

          tr[i].style.display = found ? "" : "none";
        }
      }