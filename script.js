const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden"); 
    }
  });
});
