const topButton = document.getElementById("scroll-top-button");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}