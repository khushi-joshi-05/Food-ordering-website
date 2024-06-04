const menuContainer = document.querySelector(".menu_container");
menuContainer.innerHTML = ``;

const categories = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",

  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

// Function to get meals by category
async function getMealsByCategory(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals || [];
}

// Function to log image source and name of the dish for a given category
async function getMealDataByCategory(category) {
  try {
    const meals = await getMealsByCategory(category);
    return meals.map((meal) => ({
      name: meal.strMeal,
      imgSrc: meal.strMealThumb,
    }));
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

// Function to render meal details
function renderMeals(mealData) {
  return mealData
    .map(
      (mealDetails) => `
        <div class="items">
            <img src="${mealDetails.imgSrc}" />
            <h3>${mealDetails.name}</h3>
            <p>$10.20</p>
            <button class="butt add-to-cart-button"
                    data-product-name="${mealDetails.name}"
                    data-product-imgsource="${mealDetails.imgSrc}"
                    data-product-price="10.20">
                Add to Cart
            </button>
            <div class="star-rating">
                <button class="star-button" onclick="rateItem(this, 1)">
                    <i class="fas fa-star"></i>
                </button>
                <button class="star-button" onclick="rateItem(this, 2)">
                    <i class="fas fa-star"></i>
                </button>
                <button class="star-button" onclick="rateItem(this, 3)">
                    <i class="fas fa-star"></i>
                </button>
                <button class="star-button" onclick="rateItem(this, 4)">
                    <i class="fas fa-star"></i>
                </button>
                <button class="star-button" onclick="rateItem(this, 5)">
                    <i class="fas fa-star"></i>
                </button>
            </div>
        </div>
    `
    )
    .join(""); // Join the array into a single string
}

async function RenderPage() {
categories.forEach(async (category) => {
  const mealData = await getMealDataByCategory(category);
  const renderedMeals = renderMeals(mealData);

  menuContainer.innerHTML += `<h2
  data-aos="zoom-out-left"
  data-aos-duration="1000"
  data-aos-offset="170"
  data-aos-easing="ease-in-out"
>
  ${category}
</h2>
<div
  class="menu_items"
  data-aos="zoom-out"
  data-aos-duration="1000"
  data-aos-offset="170"
  data-aos-easing="ease-in-out"
>
  ${renderedMeals}
</div>
    `;
  });
}

// Function to get cart items from local storage
function getCartItems() {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
}

// Function to set cart items to local storage
function setCartItems(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to handle add to cart button click
function cartBtn() {
  menuContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('add-to-cart-button')) {
      const productName = clickedElement.dataset.productName;
      const productImgSource = clickedElement.dataset.productImgsource;
      const productPrice = clickedElement.dataset.productPrice;

      // Get the current cart items
      const cartItems = getCartItems();

      // Check if the item is already in the cart
      const existingCartItem = cartItems.find(item => item.name === productName);

      if (existingCartItem) {
        // If the item is already in the cart, increase the quantity
        existingCartItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with quantity 1
        cartItems.push({
          name: productName,
          imgSrc: productImgSource,
          quantity: 1,
          price: productPrice,
        });
      }
      // console.log(cartItems);

      // Save the updated cart items to local storage
      setCartItems(cartItems);
      
    }
  });
}

// Call the functions in the desired order
RenderPage();
cartBtn();
