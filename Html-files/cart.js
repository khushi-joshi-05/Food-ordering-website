function displayCartItems() {
  const cartBody = document.querySelector('.items');
  cartBody.innerHTML = '';
  let totalBill = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.endsWith('_name')) {
      const itemName = localStorage.getItem(key);
      const itemPrice = localStorage.getItem(key.replace('_name', '_price'));
      const itemQuantity = parseInt(localStorage.getItem(key.replace('_name', '_quantity')));

      const cartRow = document.createElement('tr');
      const cartItemName = document.createElement('td');
      const cartItemPrice = document.createElement('td');
      const cartItemQuantity = document.createElement('td');
      const cartItemRemove = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        decrementItemQuantity(key, itemQuantity);
        displayCartItems();
      });

      cartItemName.innerText = itemName;
      cartItemPrice.innerText = itemPrice;
      const spaceNode = document.createTextNode('');
      cartItemQuantity.innerText = itemQuantity;
      cartItemPrice.classList.add('price');
      cartItemRemove.appendChild(removeButton);
      cartRow.appendChild(cartItemName);
      cartItemName.appendChild(spaceNode);
      cartRow.appendChild(cartItemPrice);
      cartItemName.appendChild(spaceNode);
      cartRow.appendChild(cartItemQuantity);
      cartRow.appendChild(cartItemRemove);
      cartBody.appendChild(cartRow);

      const itemTotal = parseFloat(itemPrice.replace('$', '')) * itemQuantity;
      totalBill += itemTotal;
    }
  }

  if (totalBill !== 0 && !isNaN(totalBill)) {
    document.getElementById('bill').innerText = `$${totalBill.toFixed(2)}`;
  } else {
    document.getElementById('bill').innerText = 'Cart Empty';
  }
}

function decrementItemQuantity(key, itemQuantity) {
  if (itemQuantity > 1) {
    const updatedQuantity = itemQuantity - 1;
    localStorage.setItem(key.replace('_name', '_quantity'), updatedQuantity);
  } else {
    removeItemFromCart(key);
  }
}

function removeItemFromCart(key) {
  localStorage.removeItem(key);
  localStorage.removeItem(key.replace('_name', '_price'));
  localStorage.removeItem(key.replace('_name', '_quantity'));
}

document.addEventListener('DOMContentLoaded', function () {
  displayCartItems();
});

let orderBtn = document.querySelector('.butt');
orderBtn.addEventListener('click', () => {
  alert('Order placed!');
});