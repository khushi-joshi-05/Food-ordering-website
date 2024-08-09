// Theme change icon toggling behavior
let themeToggleIcon = document.getElementById("theme-toggle-icon");

themeToggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleIcon.style.backgroundImage = "url('../Images/navbar/sun.png')";
  } else {
    themeToggleIcon.style.backgroundImage = "url('../Images/navbar/moon.png')";
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

const		mobile_menu = document.querySelector(".mobile-menu"),
				mobile_trigger = document.querySelector(".mobile-menu__trigger");

let	initialPoint,
finalPoint;

document.addEventListener("touchstart", function(event) {
	initialPoint = event.changedTouches[0];
});

document.addEventListener("touchend", function(event) {
	finalPoint = event.changedTouches[0];

	let	xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX),
	yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

	if(xAbs > 120 || yAbs > 120) { // 120 - SWIPE WIDTH
		if(xAbs > yAbs) {
			if(finalPoint.pageX < initialPoint.pageX) {
				// SWIPE LEFT
				mobile_menu.classList.remove("mobile-menu_open");
			} else {
				// SWIPE RIGTH
				mobile_menu.classList.add("mobile-menu_open");
			}
		} else {
			if(finalPoint.pageY < initialPoint.pageY) {
				// SWIPE UP
			} else {
				// SWIPE DOWN
			}
		}
	}
});

document.addEventListener("click", function(event) {
	const target = event.target.closest(".mobile-menu__trigger");
	if(target && target == mobile_trigger) {
		mobile_menu.classList.toggle("mobile-menu_open");
	} else if(event.target !== mobile_trigger && event.target !== mobile_menu) {
		if( mobile_menu.classList.contains("mobile-menu_open") ) {
			mobile_menu.classList.remove("mobile-menu_open");
		}
	}
});

mobile_menu.querySelectorAll("a").forEach(function(element) {
	element.addEventListener("click", function(event) {
		const anchor_href = event.currentTarget.getAttribute("href");
		if(anchor_href.charAt(0) === "#") {
			event.preventDefault();
			if(anchor_href.length > 1) { // if #hash is not empty
				const scroll_to_node = document.querySelector(event.currentTarget.hash);
				if(scroll_to_node) {
					SmoothScrollTo(scroll_to_node);
				}
			}
		}
	});
});

function SmoothScrollTo(element) {
	if(element) {
		element.scrollIntoView({
			behavior: "smooth"
		});
	}
}