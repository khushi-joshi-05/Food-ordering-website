function addItemToCart() {
    var itemName = localStorage.getItem('itemName');
    var itemPrice = localStorage.getItem('itemPrice');
    addToCart(itemName, itemPrice);
}

const addToCart = function(name, price){
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    if(name==null && price==null) return;
    const existingItem = cartItems.find(item => item.name === name);
    if (!existingItem) {
        cartItems.push({ name, price });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems);
    }

    updateCartDisplay();
    calculateBill();

}

const updateCartDisplay = function() {
    const cartBody = document.querySelector(".items");
    cartBody.innerHTML = '';
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    cartItems.forEach(item => {
        const cartRow = document.createElement("tr");
        const cartItemName = document.createElement("td");
        const cartItemPrice = document.createElement("td");
        cartItemName.innerText = item.name;
        cartItemPrice.innerText = item.price;
        cartItemPrice.classList.add("price");
        cartRow.appendChild(cartItemName);
        cartRow.appendChild(cartItemPrice);
        cartBody.appendChild(cartRow);
    });
}


// calculate total bill amount
const calculateBill = ()=>{
    let total = 0;
    itemPrices = document.querySelectorAll(".price");
    for (p of itemPrices){
        if (p!=null){
            console.log(p.innerText);
            total += parseFloat(p.innerText.replace('$',''));
        }
    }

    console.log(total);
    if(total!=0 && !isNaN(total)){
        document.getElementById("bill").innerText = "$" + total.toFixed(2)
    }

}

document.addEventListener('DOMContentLoaded', function () {
    addItemToCart();
});

let orderBtn = document.querySelector(".butt");
orderBtn.addEventListener("click", ()=>{
    alert("Order placed!");
})