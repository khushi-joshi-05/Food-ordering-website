let themeToggleIcon = document.getElementById("theme-toggle-icon");

themeToggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleIcon.src = "../Images/navbar/sun.png";
  } else {
    themeToggleIcon.src = "../Images/navbar/moon.png";
  }
});
