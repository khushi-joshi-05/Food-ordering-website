document.addEventListener("DOMContentLoaded", () => {
  loadCartFromLocalStorage();

  document.getElementById("cart-items").addEventListener("click", (event) => {
    if (event.target.classList.contains("increase-quantity")) {
      updateQuantity(event.target, 1);
    } else if (event.target.classList.contains("decrease-quantity")) {
      updateQuantity(event.target, -1);
    }
  });

  document.getElementById("applyCouponButton").addEventListener("click", () => {
    applyCoupon();
  });
});

function loadCartFromLocalStorage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear existing items

  cartItems.forEach((item) => {
    const cartItemRow = document.createElement("tr");
    cartItemRow.className = "cart-item";
    cartItemRow.setAttribute("data-product-id", item.id);
    cartItemRow.setAttribute("data-product-price", item.price);
    cartItemRow.innerHTML = `
              <td>${item.name}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td class="quantity">${item.quantity}</td>
              <td>
                  <button class="increase-quantity">+</button>
                  <button class="decrease-quantity">-</button>
              </td>
          `;
    cartItemsContainer.appendChild(cartItemRow);
  });

  updateTotal();
}

function updateQuantity(button, change) {
  const cartItemRow = button.parentElement.parentElement;
  const quantityElement = cartItemRow.querySelector(".quantity");
  const newQuantity = parseInt(quantityElement.textContent) + change;
  if (newQuantity > 0) {
    quantityElement.textContent = newQuantity;
  } else {
    cartItemRow.remove();
  }
  updateTotal();
  saveCartToLocalStorage();
}

function updateTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;
  cartItems.forEach((item) => {
    const price = parseFloat(item.getAttribute("data-product-price"));
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    total += price * quantity;
  });
  document.getElementById("cart-total").textContent = `Total: $${total.toFixed(
    2
  )}`;
}

function saveCartToLocalStorage() {
  const cartItems = [];
  document.querySelectorAll(".cart-item").forEach((item) => {
    cartItems.push({
      id: item.getAttribute("data-product-id"),
      price: parseFloat(item.getAttribute("data-product-price")),
      quantity: parseInt(item.querySelector(".quantity").textContent),
    });
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to generate a random coupon code
const generateCouponCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let couponCode = "";
  for (let i = 0; i < 8; i++) {
    couponCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return couponCode;
};

// Check if it's the user's first order and apply discount
const applyFirstTimeDiscount = () => {
  let couponCode = localStorage.getItem("couponCode");
  if (!couponCode) {
    couponCode = generateCouponCode();
    localStorage.setItem("couponCode", couponCode);
  }
  document.getElementById(
    "couponCode"
  ).innerHTML = `Use coupon code <span style="font-weight: bold;"> ${couponCode} </span> for 30% off!`;
  alert(
    `Congratulations! Your coupon code is ${couponCode}. You've received a 30% discount on your first order.`
  );
};
window.onload = applyFirstTimeDiscount;

// Function to apply the coupon and display the discounted price
function applyCoupon() {
  const couponCode = document.getElementById("inputCode").value;
  const storedCouponCode = localStorage.getItem("couponCode");

  if (!couponCode) {
    alert("Please enter a Coupon Code.");
    return;
  }

  if (couponCode === storedCouponCode) {
    let total = parseFloat(
      document.getElementById("cart-total").textContent.replace("Total: $", "")
    );
    const discount = total * 0.3;
    const discountedTotal = total - discount;

    document.getElementById(
      "cart-total"
    ).textContent = `Total: $${discountedTotal.toFixed(2)} (30% off applied)`;
    alert("Coupon code applied successfully! You've received a 30% discount.");
  } else {
    alert("Invalid coupon code. Please try again.");
  }
}
document
  .getElementById("proceed-to-payment")
  .addEventListener("click", function () {
    window.location.href = "Payment.html"; // Ensure this path is correct
  });
