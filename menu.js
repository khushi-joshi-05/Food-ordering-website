// adding items from menu to cart
document.addEventListener('DOMContentLoaded', function () {
    var menuContainers = document.querySelectorAll('.menu_container');
    menuContainers.forEach(function (container) {
        container.addEventListener('click', function (event) {
            if (event.target.classList.contains('butt')) {
                var item = event.target.closest('.items');
                var itemName = item.querySelector('h3').textContent;
                var itemPrice = item.querySelector('p').textContent;
                alert("Item added to cart successfully");

                localStorage.setItem('itemName', itemName);
                localStorage.setItem('itemPrice', itemPrice);

                window.location.href = "cart.html";
            }
        });
    });
});
