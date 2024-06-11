let themeToggleIcon = document.getElementById("theme-toggle-icon");

themeToggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleIcon.src = "../images/sun.png";
  } else {
    themeToggleIcon.src = "../images/moon.png";
  }
});
