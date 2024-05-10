document.addEventListener('DOMContentLoaded', function() {
    // Get the "Order Now" button element
    var orderNowButton = document.getElementById('btnOrder');
    
    // Add event listener to the button
    orderNowButton.addEventListener('click', function() {
        // Scroll to the menu section
        document.getElementById('menu_items').scrollIntoView({ behavior: 'smooth' });

        // Optionally, you can perform additional actions after scrolling,
        // such as displaying a modal or executing other JavaScript functions related to ordering.
    });
});
