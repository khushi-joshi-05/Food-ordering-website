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
function getVisitorCount() {
  return localStorage.getItem('visitorCount') || 0;
}

function incrementVisitorCount() {
  let count = parseInt(getVisitorCount()) + 1;
  localStorage.setItem('visitorCount', count);
  return count;
}

function displayVisitorCount() {
  const counterElement = document.querySelector('.website-counter');
  const count = incrementVisitorCount();
  counterElement.textContent = count;
}
document.addEventListener('DOMContentLoaded', displayVisitorCount);