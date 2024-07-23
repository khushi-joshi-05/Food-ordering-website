
// Theme Toggle
const themeToggleIcon = document.getElementById("theme-toggle-icon");


//Themechange icon toggling behaviour



themeToggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {

    themeToggleIcon.src = "Images/navbar/sun.png";
  } else {
    themeToggleIcon.src = "Images/navbar/moon.png";
  }
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Services dropdown
const dropdownli = document.querySelector(".nav-item.dropdown");
const navlinka = document.querySelector('.nav-link.services');
const menu = document.querySelector('.dropdown .dropdown-menu');

dropdownli.addEventListener("mouseenter", () => {
  navlinka.classList.add("show");
  menu.classList.add("show");
  navlinka.setAttribute('aria-expanded', 'true');
  menu.setAttribute("data-bs-popper", 'static');
});

menu.addEventListener("mouseleave", () => {
  menu.classList.remove("show");
  navlinka.classList.remove("show");
  navlinka.setAttribute('aria-expanded', 'false');
  menu.removeAttribute("data-bs-popper");
  dropdownli.addEventListener("mouseleave", () => {
    menu.classList.remove("show");
    navlinka.classList.remove("show");
    navlinka.setAttribute('aria-expanded', 'false');
    menu.removeAttribute("data-bs-popper");
  })
});
