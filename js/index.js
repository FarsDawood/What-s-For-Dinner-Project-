document.addEventListener("DOMContentLoaded", function () {
  changeRecipe();
});

let recipeImage = document.getElementById("recipe-image");
let recipePrepTime = document.getElementById("prep_time");
let recipeCookTime = document.getElementById("cook_time");
let recipeServingCount = document.getElementById("serving-count");
let recipeRatingNumber = document.getElementById("recipe-rating-number");
let recipeRatingCount = document.getElementById("recipe-rating-count");

let recipeLevel = document.getElementById("recipe-level");
let recipeCulture = document.getElementById("recipe-culture");

let recipeName = document.getElementById("recipe-name");
let recipeDescription = document.getElementById("recipe-description");

let alertBox = document.getElementById("alert");

let recipeIngredients = document.getElementById("ingredients");
let recipeInstructions = document.getElementById("instructions");

let recipeCalories = document.getElementById("calories-value");
let recipeProtein = document.getElementById("protein-value");
let recipeCarbs = document.getElementById("carbohydrates-value");
let recipeFat = document.getElementById("fat-value");
let recipeFiber = document.getElementById("fiber-value");
let recipeSodium = document.getElementById("sodium-value");

let recipeChefTips = document.getElementById("chef-tips");

let currentRecipeIndex = -1;
let recipeChangeButton = document.getElementById("recipe-change-button");

let recipesData = [
  {
    image: "images/Chicken-Tikka-Masala.jfif",
    prepTime: 20,
    cookTime: 30,
    servingCount: 4,
    ratingNumber: 4.7,
    ratingCount: 367,
    level: "Intermediate",
    culture: "Asian",
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    alert: true,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup yogurt",
      "2 tbsp garam masala",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "1 can tomato sauce",
      "1 cup heavy cream",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    calories: 450,
    protein: 38,
    carbohydrates: 22,
    fat: 22,
    fiber: 4,
    sodium: 760,
    chefTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
  {
    image: "images/pad-thai.jfif",
    prepTime: 20,
    cookTime: 15,
    servingCount: 2,
    ratingNumber: 4.8,
    ratingCount: 445,
    level: "Intermediate",
    culture: "Asian",
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    alert: false,
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
    ],
    calories: 540,
    protein: 32,
    carbohydrates: 62,
    fat: 16,
    fiber: 4,
    sodium: 1120,
    chefTips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  {
    image: "images/Teriyaki-Chicken-Bowl.jpeg",
    prepTime: 15,
    cookTime: 20,
    servingCount: 2,
    ratingNumber: 4.7,
    ratingCount: 467,
    level: "Easy",
    culture: "Asian",
    name: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    alert: false,
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
    ],
    calories: 540,
    protein: 42,
    carbohydrates: 58,
    fat: 14,
    fiber: 4,
    sodium: 1240,
    chefTips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    image: "images/Lasagna-Bolognese.jfif",
    prepTime: 30,
    cookTime: 90,
    servingCount: 4,
    ratingNumber: 4.9,
    ratingCount: 478,
    level: "Intermediate",
    culture: "Italian",
    name: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    alert: true,
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],
    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],
    calories: 680,
    protein: 42,
    carbohydrates: 58,
    fat: 28,
    fiber: 6,
    sodium: 920,
    chefTips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],
  },
];

function addIngredients(ingredients) {
  let container = "";
  for (let i = 0; i < ingredients.length; i++) {
    container += `
            <div class="d-flex align-items-center ">
                        <p class="ingredient-number">${i + 1}</p>
                        <p class="navtap-text">${ingredients[i]}</p>
                        </div>
        `;
  }
  recipeIngredients.innerHTML = container;
}

function addInstructions(instructions) {
  let container = "";
  for (let i = 0; i < instructions.length; i++) {
    container += `
            <div class="d-flex align-items-center ">
                      <p class="instruction-number">${i + 1}</p>
                      <p class="navtap-text">${instructions[i]}</p>
                    </div>
        `;
  }
  recipeInstructions.innerHTML = container;
}

function addChefTips(chefTips) {
  let container = "";
  for (let i = 0; i < chefTips.length; i++) {
    container += `
             <div class="chef-tip-card d-flex align-items-center ">
                      <div class="chef-tips-icons">
                        <img src="images/icons/check.png" class="w-100" alt="">
                      </div>
                      <p class="navtap-text">${chefTips[i]}</p>
                    </div>
        `;
  }
  recipeChefTips.innerHTML = container;
}

function changeRecipe() {
  let randomNumber = 0;
  do {
    randomNumber = Math.floor(Math.random() * recipesData.length);
  } while (randomNumber === currentRecipeIndex);

  currentRecipeIndex = randomNumber;

  recipeImage.src = recipesData[randomNumber].image;
  recipePrepTime.innerText = recipesData[randomNumber].prepTime;
  recipeCookTime.innerText = recipesData[randomNumber].cookTime;
  recipeServingCount.innerText = recipesData[randomNumber].servingCount;
  recipeRatingNumber.innerText = recipesData[randomNumber].ratingNumber;
  recipeRatingCount.innerText = recipesData[randomNumber].ratingCount;
  recipeLevel.innerText = recipesData[randomNumber].level;
  recipeCulture.innerText = recipesData[randomNumber].culture;
  recipeName.innerText = recipesData[randomNumber].name;
  recipeDescription.innerText = recipesData[randomNumber].description;
  if (recipesData[randomNumber].alert) {
    alertBox.classList.remove("d-none");
  } else {
    alertBox.classList.add("d-none");
  }
  addIngredients(recipesData[randomNumber].ingredients);
  addInstructions(recipesData[randomNumber].instructions);
  recipeCalories.innerText = recipesData[randomNumber].calories;
  recipeProtein.innerText = recipesData[randomNumber].protein;
  recipeCarbs.innerText = recipesData[randomNumber].carbohydrates;
  recipeFat.innerText = recipesData[randomNumber].fat;
  recipeFiber.innerText = recipesData[randomNumber].fiber;
  recipeSodium.innerText = recipesData[randomNumber].sodium;
  addChefTips(recipesData[randomNumber].chefTips);
}
