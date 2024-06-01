document.addEventListener('DOMContentLoaded', function() {
    // Handle viewport dimensions updates
    function updateViewportDimensions() {
        let width = document.getElementById("width");
        let height = document.getElementById("height");
        if (width && height) {
            width.innerHTML = "Width : " + window.innerWidth + "px";
            height.innerHTML = "Height : " + window.innerHeight + "px";
        }
    }
    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);

    // Sidebar toggle function
    let sidebar = document.querySelector(".sidebar");
    function toggleSideBar() {
        if (sidebar) {
            sidebar.classList.toggle("visible");
        }
    }

    // Adjust sidebar visibility on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 820 && sidebar) {
            sidebar.classList.remove("visible");
        }
    });

    // Clear local storage on page unload
    window.addEventListener('beforeunload', function(event) {
        localStorage.clear();
    });

    // Button click actions
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.onclick = function() {
            location.href = "./Html-files/menu.html";
        };
    }

    // Navigation redirection functions
    function redirectLogin() {
        window.location.href = "Html-files/login.html";
    }

    function redirectSignup() {
        window.location.href = "Html-files/signup.html";
    }

    document.querySelector('.leftalign button').addEventListener('click', redirectLogin);
    document.querySelector('.rightalign button').addEventListener('click', redirectSignup);

    // Toggle sidebar on click using a more organized approach
    const menuButton = document.querySelector('.bar2');
    if (menuButton) {
        menuButton.addEventListener('click', toggleSideBar);
    }
});

