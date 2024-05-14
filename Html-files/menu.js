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

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.items');
    const favoriteFilterToggle = document.querySelector('.fav .circle');
    let showFavorites = JSON.parse(localStorage.getItem('showFavorites')) || false;
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const updateProductColor = (productElement, isFavorite) => {
        const heartIcon = productElement.querySelector('.heart-icon');
        if (isFavorite) {
            heartIcon.style.color = 'red';
        } else {
            heartIcon.style.color = '';
        }
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
                if (favorites.includes(productName)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        } else {
            items.forEach(product => {
                product.style.display = 'block';
            });
        }
    };
    if (showFavorites) {
        document.querySelector('.fav .circle').style.transform = 'translateX(24px)';
    }
    favoriteFilterToggle.addEventListener('click', () => {
        showFavorites = !showFavorites;
        if (showFavorites) {
            favoriteFilterToggle.style.transform = 'translateX(24px)';
        } else {
            favoriteFilterToggle.style.transform = 'translateX(0)';
        }
        saveShowFavoritesState();
        applyFavoriteFilter();
    });
    applyFavoriteFilter();
});
