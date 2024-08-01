document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

window.addEventListener("beforeunload", function (event) {
  localStorage.clear();
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
  }, 500);
});

document.querySelectorAll('.faq-item h2').forEach(item => {
  item.addEventListener('click', () => {
      const parent = item.parentNode;
      parent.classList.toggle('active');
  });
});

// Get themeToggleIcon element
let themeToggleIcon = document.getElementById("theme-toggle-icon");

// Load theme from localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggleIcon.src = "../Images/navbar/sun.png";
} else {
  document.body.classList.remove("dark-theme");
  themeToggleIcon.src = "../Images/navbar/moon.png";
}

// Toggle theme and save to localStorage
themeToggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  
  if (document.body.classList.contains("dark-theme")) {
    themeToggleIcon.src = "../Images/navbar/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggleIcon.src = "../Images/navbar/moon.png";
    localStorage.setItem("theme", "light");
  }
});