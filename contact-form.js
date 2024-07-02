
const submitBtn = document.getElementById('contactForm');

submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (firstName && lastName && email && message) {
        if (emailPattern.test(email)) {
            Toastify({
                text: "Your message has been sent successfully!",
                duration: 3000,
                style: {
                    background: "linear-gradient(to top, #e37f0f, #df8d0a, #db9b0c, #d5a816, #cfb423)",
                    borderRadius: "25px"
                },
                gravity: "bottom"
            }).showToast();

            // Reset the form fields
            document.getElementById('first-name').value = '';
            document.getElementById('last-name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            Toastify({
                text: "Please enter a valid email address.",
                duration: 3000,
                style: {
                    background: "linear-gradient(to top, #ff0000, #ff4d4d, #ff6666, #ff8080, #ff9999)",
                    borderRadius: "25px"
                },
                gravity: "bottom"
            }).showToast();
        }
    } else {
        Toastify({
            text: "Please fill in all fields.",
            duration: 3000,
            style: {
                background: "linear-gradient(to top, #ff0000, #ff4d4d, #ff6666, #ff8080, #ff9999)",
                borderRadius: "25px"
            },
            gravity: "bottom"
        }).showToast();
    }
});
