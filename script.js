// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for internal links
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 60, // Ajusta a posição para o topo do viewport
        behavior: "smooth"
      });
    });
  });

  // Form validation (basic example)
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      event.preventDefault();
      alert("Por favor, preencha todos os campos.");
    }
  });
});