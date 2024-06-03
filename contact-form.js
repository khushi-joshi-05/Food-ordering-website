document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate form submission success with Toastify
    Toastify({
        text: "Your message has been sent successfully!",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)" // Example gradient background color
        },
        className: "toastify-success",
        gravity:"bottom" // Example custom class for styling
    }).showToast();

    // Reset the form
    
});
