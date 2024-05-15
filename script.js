function updateViewportDimensions() {
    let width = document.getElementById("width");
    let height = document.getElementById("height");
    width.innerHTML = "Width : " + window.innerWidth + "px";
    height.innerHTML = "Height : " + window.innerHeight + "px";
}
updateViewportDimensions();
window.addEventListener('resize', updateViewportDimensions);



let sidebar = document.querySelector(".sidebar");

function toggleSideBar() {
    if (sidebar.classList.contains("visible")) {
        sidebar.classList.remove("visible");
    } else {
        sidebar.classList.add("visible");
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
        sidebar.classList.remove("visible");
    }
});