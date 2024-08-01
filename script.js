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

  
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('h2').addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('p');
          otherContent.style.maxHeight = 0;
          otherContent.style.opacity = 0;
        }
      });

      // Toggle the clicked item
      item.classList.toggle('active');
      const content = item.querySelector('p');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = 1;
      } else {
        content.style.maxHeight = 0;
        content.style.opacity = 0;
      }
    });
  });
});

/*Refresher*/
document.addEventListener('DOMContentLoaded', function() {
  const caduceus = document.getElementById('caduceus');
  
  caduceus.addEventListener('mouseover', function() {
    location.reload();
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

