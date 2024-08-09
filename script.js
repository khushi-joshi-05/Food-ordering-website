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

//Themechange icon toggling behaviour
let themeToggleIcon = document.getElementById("theme-toggle-icon");
let themeToggleLogo = document.getElementById("theme-toggle-logo");
themeToggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle(":root")
  if (document.body.classList.contains("dark-theme")) {
    themeToggleIcon.src = "Images/navbar/sun.png";
    themeToggleLogo.src = "Images/logo/Logo-Dark.png";
  } else {
    themeToggleIcon.src = "Images/navbar/moon.png";
    themeToggleLogo.src="Images/logo/Logo-Light.png";
  }
});
