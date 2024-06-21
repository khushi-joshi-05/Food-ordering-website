const submitBtn = document.getElementById('contactForm');

submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    const toast = Toastify({
        text: "Your message has been sent successfully!",
        duration: 3000,
        style: {
            background: "linear-gradient(to top, #e37f0f, #df8d0a, #db9b0c, #d5a816, #cfb423)",
            borderRadius: "25px"
        },
        gravity:"bottom" // Example custom class for styling
    })
    toast.showToast();
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});