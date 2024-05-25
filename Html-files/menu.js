document.addEventListener('DOMContentLoaded', () => {
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

    const items = document.querySelectorAll('.items');
    const favoriteFilterToggle = document.querySelector('.fav .circle');
    let showFavorites = JSON.parse(localStorage.getItem('showFavorites')) || false;
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const updateProductColor = (productElement, isFavorite) => {
        const heartIcon = productElement.querySelector('.heart-icon');
        heartIcon.style.color = isFavorite ? 'red' : '';
    };

    const saveFavorites = () => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const saveShowFavoritesState = () => {
        localStorage.setItem('showFavorites', JSON.stringify(showFavorites));
    };

    items.forEach(product => {
        const productName = product.querySelector('h3').textContent.trim();
        if (favorites.includes(productName)) {
            updateProductColor(product, true);
        }

        product.querySelector('.heart-icon').addEventListener('click', (event) => {
            event.stopPropagation();

            if (favorites.includes(productName)) {
                favorites.splice(favorites.indexOf(productName), 1);
                updateProductColor(product, false);
            } else {
                favorites.push(productName);
                updateProductColor(product, true);
            }
            saveFavorites();
            applyFavoriteFilter();
        });
    });

    const applyFavoriteFilter = () => {
        if (showFavorites) {
            items.forEach(product => {
                const productName = product.querySelector('h3').textContent.trim();
                product.style.display = favorites.includes(productName) ? 'block' : 'none';
            });
        } else {
            items.forEach(product => {
                product.style.display = 'block';
            });
        }
    };

    if (showFavorites) {
        favoriteFilterToggle.style.transform = 'translateX(24px)';
    }

    favoriteFilterToggle.addEventListener('click', () => {
        showFavorites = !showFavorites;
        favoriteFilterToggle.style.transform = showFavorites ? 'translateX(24px)' : 'translateX(0)';
        saveShowFavoritesState();
        applyFavoriteFilter();
    });

    applyFavoriteFilter();

    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            
            // Check if the item already exists in the cart
            const existingItemIndex = cartItems.findIndex(item => item.id === productId);
            if (existingItemIndex !== -1) {
                // If it exists, increment the quantity
                cartItems[existingItemIndex].quantity += 1;
            } else {
                // If it does not exist, add new item
                cartItems.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            // Save updated cart to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            // Optionally, you can show a message or confirmation
            alert('Item has been added to the cart successfully.');
        });
    });
});
