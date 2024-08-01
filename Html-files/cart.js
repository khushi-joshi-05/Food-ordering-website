document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage();

    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('increase-quantity')) {
            updateQuantity(event.target, 1);
        } else if (event.target.classList.contains('decrease-quantity')) {
            updateQuantity(event.target, -1);
        }
    });
});

function loadCartFromLocalStorage() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    cartItems.forEach(item => {
        cartItemsContainer.appendChild(createCartItemElement(item));
    });

    console.log(cartItems);
    updateTotal();
}

function updateQuantity(button, change) {
    const cartItemRow = button.closest('.cart-item');
    const quantityElement = cartItemRow.querySelector('.quantity');
    const priceElement = cartItemRow.querySelector(".price");
    const unitPrice = parseFloat(cartItemRow.getAttribute('data-product-price'));
    const newQuantity = parseInt(quantityElement.textContent) + change;

    if (newQuantity <= 0) return; // Prevent quantity from being less than 1

    quantityElement.textContent = newQuantity;
    priceElement.textContent = (unitPrice * newQuantity).toFixed(2);

    const decreaseBtn = cartItemRow.querySelector(".decrease-quantity");
    if (newQuantity == 1) {
        decreaseBtn.classList.add("disable");
    } else {
        decreaseBtn.classList.remove("disable");
    }

    updateTotal();
    saveCartToLocalStorage();
}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0.0;

    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-product-price'));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });

    document.getElementById('cart-total').innerHTML = (total != 0) ? `<span>Subtotal:</span> $${total.toFixed(2)}` : ``;
    handleEmptyCart(total);
}

function saveCartToLocalStorage() {
    const cartItems = [];

    document.querySelectorAll('.cart-item').forEach(item => {
        cartItems.push({
            id: item.getAttribute('data-product-id'),
            name: item.getAttribute('data-product-name'),
            unitPrice: item.getAttribute('data-product-price'),
            price: (parseFloat(item.getAttribute('data-product-price')) * parseInt(item.querySelector('.quantity').textContent)).toFixed(2),
            quantity: parseInt(item.querySelector('.quantity').textContent),
            image: item.getAttribute('data-product-image')
        });
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function createCartItemElement(item) {
    const cartItemRow = document.createElement('div');
    cartItemRow.className = 'cart-item';
    cartItemRow.setAttribute('data-product-id', item.id);
    cartItemRow.setAttribute('data-product-price', item.price);
    cartItemRow.setAttribute('data-product-name', item.name);
    cartItemRow.setAttribute('data-product-image', item.image);

    cartItemRow.innerHTML = `
        <img src='${item.imgSrc}' alt='${item.name}-image' height='100px' width='100px'>
        <div class='detail'>
            <div class="name">${item.name}</div>
            <div class="quantity-wrapper">
                <span class="btn decrease-quantity ${item.quantity == 1 ? 'disable' : ''}">-</span>
                <span class="quantity">${item.quantity}</span>
                <span class="btn increase-quantity">+</span>
            </div>
            <div class='price'>${parseFloat(item.price).toFixed(2)}</div>
        </div>`;

    const removeBtn = document.createElement('div');
    removeBtn.className = 'btn remove';
    removeBtn.innerHTML = 'x';
    removeBtn.addEventListener('click', (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
        updateTotal();
        saveCartToLocalStorage();
    });
    cartItemRow.appendChild(removeBtn);

    return cartItemRow;
}

function handleEmptyCart(total) {
    const emptyCartContainer = document.querySelector('.empty-cart');
    if (total!=0) {
        emptyCartContainer.innerHTML = ``;
        return(false);// Cart is not empty
    } else {
        emptyCartContainer.innerHTML = `
            <h4>Empty Menu!</h4>
            <p>Looks like you haven't made your choice yet... Check what we have got for you and get it swished.</p>
            <a href="./menu.html"><button class="butt">Explore Menu</button></a>`;
        alert("To place Order,Kindly add items to the cart");
        stopPropagation();
        return(true); // Cart is empty
    }
}

// Function to generate a random coupon code
const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let couponCode = '';
    for (let i = 0; i < 8; i++) {
        couponCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return couponCode;
}

// Check if it's the user's first order and apply discount
const applyFirstTimeDiscount = () => {
    let couponCode = localStorage.getItem('couponCode');
    if (!couponCode) {
        couponCode = generateCouponCode();
        localStorage.setItem('couponCode', couponCode);
    }
    document.getElementById('couponCode').innerHTML = `Use coupon code <span style="font-weight: bold;"> ${couponCode} </span> for 30% off!`;
    document.querySelector(".coupen-inner").innerHTML = `Congratulations! Your coupon code is ${couponCode}. You've received a 30% discount on your first order.`;
}

// window.onload = applyFirstTimeDiscount;

// Input for apply coupon code
document.getElementById('applyCouponButton').addEventListener('click', function () {
    const couponCode = document.getElementById('inputCode').value;
    if (!couponCode) {

        alert('Please enter a Coupon Code.');
        stopPropagation();
        // return;
    }
   
});

const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");
const orderNowButton = document.getElementById("orderNowButton");

orderNowButton.addEventListener("click", () => {
    const total = updateTotal(); // Calculate the total
    const isEmptyCart =  handleEmptyCart(total);

    if (isEmptyCart) {
       
        return; // Exit early if the cart is empty
    }

    // Only show modal if cart is not empty
    else {modal.style.display = "block";}
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

 // adding donate button

document.addEventListener('DOMContentLoaded', function() {
    const donateButton = document.getElementById('donateBtn');
    donateButton.addEventListener('click', function() {
        window.location.href = '../Html-files/donation-form.html';
    });
});

