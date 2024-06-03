function rateItem(button, rating) {
    const starButtons = button.parentElement.querySelectorAll('.star-button');
    starButtons.forEach((starButton, index) => {
        if (index < rating) {
            starButton.classList.add('rated');
        } else {
            starButton.classList.remove('rated');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const starButtons = document.querySelectorAll('.star-button');
    starButtons.forEach((starButton, index) => {
        //Adding event listener for all stars
        starButton.addEventListener('mouseover', (e) => {
            highlightStars(e.target, (index)%5);
        });
        starButton.addEventListener('mouseout', (e) => {
            removeHoverStars(e.target);
        });
    });

    function highlightStars(target, rating) {
        //Finding the parent container of the current star
        const starRating = target.closest('.star-rating');
        const starChildren = Array.from(starRating.children);

        starChildren.forEach((starButton, index) => {
            if (index <= rating) {
                //glowing up all stars before current index
                starButton.classList.add('hover');
            } else {
                //(supressing the effect of rated class)
                starButton.classList.add('greyed');
            }
        });
    }
    function removeHoverStars(target) {
        const starRating = target.closest('.star-rating');
        const starButtons = Array.from(starRating.children);
        starButtons.forEach(starButton => {
            //removing both hover and greyed classes in order to make 'rated' class stand out
            starButton.classList.remove('hover');
            starButton.classList.remove('greyed');
        });
    }
});


document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function () {
        const image = this.parentElement.querySelector("img").getAttribute("src");
        const productId = this.getAttribute('data-product-id');
        const productName = this.getAttribute('data-product-name');
        const productPrice = parseFloat(this.getAttribute('data-product-price'));

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex(item => item.id === productId);
        if (existingItemIndex !== -1) {
            // If it exists, increment the quantity
            cartItems[existingItemIndex].quantity += 1;
            cartItems[existingItemIndex].price = parseFloat(cartItems[existingItemIndex].price) + parseFloat(cartItems[existingItemIndex].unitPrice);
        } else {
            // If it does not exist, add new item
            cartItems.push({
                id: productId,
                name: productName,
                unitPrice: productPrice,
                price: productPrice,
                quantity: 1,
                image: image
            });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Optionally, you can show a message or confirmation
        alert(`Item has been added to the cart successfully.`);
    });
});
