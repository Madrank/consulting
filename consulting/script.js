// FAQ Toggle
document.querySelectorAll(".faq-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector("i");

      content.classList.toggle("hidden");
      icon.classList.toggle("transform");
      icon.classList.toggle("rotate-180");
    });
  });

  // Formulaire login Submission
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      console.log("Login attempt with:", { email, password });

      alert("Connexion en cours... (simulation)");
    });


  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll('[href="#client-area"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        loginModal.classList.remove("hidden");
      }
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    loginModal.classList.add("hidden");
  });

  // Close modal when clicking outside
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.classList.add("hidden");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });