// Theme change icon toggling behavior
let themeToggleIcon = document.getElementById("theme-toggle-icon");

themeToggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle(":root")
  if (themeToggleIcon.src.includes('moon.png')) {
    // If it's moon (dark theme), switch to (light theme)
    themeToggleIcon.src = 'Images/navbar/sun2.png';
    document.body.classList.add('light-theme'); // Add light theme 
    document.body.classList.remove('dark-theme'); // Remove dark theme class from body
} 
  else {
    // If it's sun (light theme), switch to moon (dark theme)
    themeToggleIcon.src = 'Images/navbar/moon.png';
    document.body.classList.add('dark-theme'); // Add dark theme class to body
    document.body.classList.remove('light-theme'); // Remove light theme class from body
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
});

dropdownli.addEventListener("mouseleave", () => {
  menu.classList.remove("show");
  navlinka.classList.remove("show");
  navlinka.setAttribute('aria-expanded', 'false');
  menu.removeAttribute("data-bs-popper");
});
