const dots = [];
const cursor = {
  x: 0,
  y: 0,
};

for (let i = 0; i < 10; i++) {
  const dot = document.createElement("div");
  dot.style.scale=`0.${10-(i)}`;
  dot.className = "dot";
  document.body.appendChild(dot);
  dots.push(dot);
}

document.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

function draw() {
  let x = cursor.x;
  let y = cursor.y;

  dots.forEach((dot, index) => {
    const nextDot = dots[index + 1] || dots[0];

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    x += (nextDot.offsetLeft - dot.offsetLeft) * 0.5;
    y += (nextDot.offsetTop - dot.offsetTop) * 0.5;
  });
}

setInterval(draw, 10);

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