
document.addEventListener('DOMContentLoaded', function () {
  function incrementCounter(itemElement) {
    let counterElement = itemElement.querySelector('.count');
    let counter = parseInt(counterElement.textContent);
    counter++;
    counterElement.textContent = counter;
  }

  function decrementCounter(itemElement) {
    let counterElement = itemElement.querySelector('.count');
    let counter = parseInt(counterElement.textContent);
    if (counter > 0) {
      counter--;
      counterElement.textContent = counter;
    }
  }

  document.querySelectorAll('.menu_items .items').forEach(function (item) {
    item.querySelector('.increase').addEventListener('click', function () {
      incrementCounter(item);
    });


    item.querySelector('.decrease').addEventListener('click', function () {
      decrementCounter(item);
    });

    item.querySelector('.butt').addEventListener('click', function () {
      const itemName = item.querySelector('h3').textContent;
      const itemPrice = item.querySelector('p').textContent;
      const itemQuantity = parseInt(item.querySelector('.count').textContent);

      if (itemQuantity > 0) {
        addItemToCart(itemName, itemPrice, itemQuantity);
      } else {
        alert('Please increase the quantity before ordering.');
      }
    });
  });

  function addItemToCart(itemName, itemPrice, itemQuantity) {
    const itemKey = `item_${Date.now()}`;
    localStorage.setItem(`${itemKey}_name`, itemName);
    localStorage.setItem(`${itemKey}_price`, itemPrice);
    localStorage.setItem(`${itemKey}_quantity`, itemQuantity);
  }

  function redirectToCart() {
    let hasItemsInCart = false;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.endsWith('_quantity')) {
        const itemQuantity = parseInt(localStorage.getItem(key));
        if (itemQuantity > 0) {
          hasItemsInCart = true;
          break;
        }
      }
    }

    if (hasItemsInCart) {
      window.location.href = 'cart.html';
    } else {
      alert('Please add items to the cart before ordering.');
    }
  }

  const orderNowButtons = document.querySelectorAll('.butt');
  orderNowButtons.forEach(function (button) {
    button.addEventListener('click', redirectToCart);
  });
});

});
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
