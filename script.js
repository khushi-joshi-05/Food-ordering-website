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
