// const menuContainer= document.querySelector('.menu_container')
// menuContainer.innerHTML=``

// const categories = [
//     "Beef", "Breakfast", "Chicken", "Dessert", "Goat",
//     "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood",
//     "Side", "Starter", "Vegan", "Vegetarian"
// ]

// async function getMealsByCategory(category) {
//     const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.meals || [];
// }

// // Function to log image source and name of the dish for a given category
// async function getMealDataByCategory(category) {
//     try {
//         const meals = await getMealsByCategory(category);
//         return meals.map(meal => ({
//             name: meal.strMeal,
//             imgSrc: meal.strMealThumb
//         }));
//     } catch (error) {
//         console.error('Error fetching meals:', error);
//         return [];
//     }
// }

// // Example usage for the category "Seafood"
// // (async () => {
// //     const mealData = await getMealDataByCategory('Seafood');
// //     console.log(mealData);
// // })();
// let mealData
// categories.forEach(async(category)=>{
//     (async () => {
//         mealData = await getMealDataByCategory(category);
//         console.log(mealData);
//     })();
//     function renderMeals(){
//         mealData.forEach(mealDetails=>{
//             return `
//             <div class="items">
//       <img
//         src="${mealDetails.imgScr}"
//       />

//       <h3>${mealDetails.name}</h3>
//       <p>$10.20</p>
//       <!-- <button class="but">Add to Cart</button> -->
//       <button
//         class="butt add-to-cart-button"
//         data-product-id="1.01"
//         data-product-name="Indian Thali"
//         data-product-price="10.20"
//       >
//         Add to Cart
//       </button>

//       <div class="star-rating">
//         <button class="star-button" onclick="rateItem(this, 1)">
//           <i class="fas fa-star"></i>
//         </button>
//         <button class="star-button" onclick="rateItem(this, 2)">
//           <i class="fas fa-star"></i>
//         </button>
//         <button class="star-button" onclick="rateItem(this, 3)">
//           <i class="fas fa-star"></i>
//         </button>
//         <button class="star-button" onclick="rateItem(this, 4)">
//           <i class="fas fa-star"></i>
//         </button>
//         <button class="star-button" onclick="rateItem(this, 5)">
//           <i class="fas fa-star"></i>
//         </button>
//       </div>
//     </div>
//   </a>
//             `
//         })
//     }
//     menuContainer.innerHTML+=`<h2
//     data-aos="zoom-out-left"
//     data-aos-duration="1000"
//     data-aos-offset="170"
//     data-aos-easing="ease-in-out"
//   >
//     ${category}
//   </h2>
//   ${renderMeals()}
//     `
// })

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
                    data-product-id="1.01"
                    data-product-name="${mealDetails.name}"
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
