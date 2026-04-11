let recipes = [
    // Drinks - Coffee
    { id: "Cappuccino", name: "French Vanilla Cappuccino", ingredients: ["coffee", "milk", "vanilla syrup"], page: "coffee.html" },
    { id: "icedcoffee", name: "Caramel Hazelnut Iced Coffee", ingredients: ["coffee", "milk", "caramel syrup", "hazelnut syrup", "ice"], page: "coffee.html" },
    { id: "arabcoffee", name: "Arab Coffee", ingredients: ["coffee", "cardamom", "water"], page: "coffee.html" },

    // Drinks - Fresh Juices & Smoothies
    { id: "Smoothie", name: "Berry Blast Smoothie", ingredients: ["berries", "yogurt", "honey"], page: "juices.html" },
    { id: "smothie2", name: "Pineapple Mango Smoothie", ingredients: ["pineapple", "mango", "orange juice"], page: "juices.html" },
    { id: "strawberrylemo", name: "Strawberry Lemonade", ingredients: ["strawberries", "lemon juice", "sugar", "water"], page: "juices.html" },

    // Drinks - Hot Drinks
    { id: "hot-chocolate", name: "Hot Chocolate", ingredients: ["cocoa powder", "milk", "sugar"], page: "hot-drinks.html" },
    { id: "turkish-tea", name: "Turkish Tea", ingredients: ["tea leaves", "water"], page: "hot-drinks.html" },
    { id: "Hibiscus-tea", name: "Herbal Hibiscus Tea", ingredients: ["hibiscus", "water", "honey"], page: "hot-drinks.html" },

    // Main Dish - Beef
    { id: "beef_steak", name: "Beef Steak", ingredients: ["beef", "salt", "pepper", "oil"], page: "maindish/beef" },
    { id: "beef_tacos", name: "Beef Tacos", ingredients: ["beef", "taco shells", "lettuce", "cheese", "salsa"], page: "maindish/beef" },
    { id: "beef_stew", name: "Beef Stew", ingredients: ["beef", "carrots", "potatoes", "onion", "broth"], page: "maindish/beef" },

    // Main Dish - Chicken
    { id: "fried_chicken", name: "Fried Chicken", ingredients: ["chicken", "flour", "oil", "spices"], page: "maindish/chicken" },
    { id: "chicken_curry", name: "Chicken Curry", ingredients: ["chicken", "onion", "garlic", "curry powder", "coconut milk"], page: "maindish/chicken" },
    { id: "grilled_chicken", name: "Grilled Chicken", ingredients: ["chicken", "salt", "pepper", "olive oil"], page: "maindish/chicken" },

    // Main Dish - Pasta
    { id: "spaghetti_carbonara", name: "Spaghetti Carbonara", ingredients: ["spaghetti", "egg", "bacon", "parmesan cheese"], page: "maindish/pasta" },
    { id: "pasta_pesto", name: "Pasta Pesto", ingredients: ["pasta", "basil", "pine nuts", "parmesan cheese", "olive oil"], page: "maindish/pasta" },
    { id: "lasagna", name: "Lasagna", ingredients: ["lasagna noodles", "ground beef", "tomato sauce", "cheese"], page: "maindish/pasta" },

    // Main Dish - Seafood
    { id: "grilled_salmon", name: "Grilled Salmon", ingredients: ["salmon", "lemon", "olive oil", "salt", "pepper"], page: "maindish/seefood" },
    { id: "shrimp_pasta", name: "Shrimp Pasta", ingredients: ["shrimp", "pasta", "garlic", "olive oil", "parmesan"], page: "maindish/seefood" },
    { id: "fish_curry", name: "Fish Curry", ingredients: ["fish", "onion", "curry powder", "coconut milk"], page: "maindish/seefood" },

    // Main Dish - Fast Food
    { id: "burger", name: "Burger", ingredients: ["bun", "beef patty", "lettuce", "tomato", "cheese"], page: "maindish/fastfood" },
    { id: "french_fries", name: "French Fries", ingredients: ["potatoes", "oil", "salt"], page: "maindish/fastfood" },
    { id: "pizza", name: "Pizza", ingredients: ["pizza dough", "tomato sauce", "cheese", "toppings"], page: "maindish/fastfood" },

    // Main Dish - Vegetarian
    { id: "veggie_stir_fry", name: "Veggie Stir-Fry", ingredients: ["mixed vegetables", "soy sauce", "garlic", "oil"], page: "maindish/Vegetarian" },
    { id: "vegetable_curry", name: "Vegetable Curry", ingredients: ["mixed vegetables", "onion", "garlic", "curry powder"], page: "maindish/Vegetarian" },
    { id: "quinoa_salad", name: "Quinoa Salad", ingredients: ["quinoa", "vegetables", "olive oil", "lemon juice"], page: "maindish/Vegetarian" },

    // Healthy
    { id: "grilled_salmon_avocado", name: "Grilled Salmon & Avocado", ingredients: ["salmon", "avocado", "olive oil", "lemon"], page: "Healthy/Keto" },
    { id: "quinoa_buddha_bowl", name: "Quinoa Buddha Bowl", ingredients: ["quinoa", "vegetables", "chickpeas", "olive oil"], page: "Healthy/Vegan" },
    { id: "lemon_herb_chicken", name: "Lemon Herb Chicken", ingredients: ["chicken", "lemon", "herbs", "olive oil"], page: "Healthy/Protein" },
    { id: "zucchini_noodles", name: "Zucchini Noodles (Zoodles)", ingredients: ["zucchini", "olive oil", "garlic", "parmesan"], page: "Healthy/Gluten-Free" },

    // Bakery - Bread
    { id: "Baguette", name: "Classic French Baguette", ingredients: ["flour", "water", "yeast", "salt"], page: "Bread .html" },
    { id: "Sourdough", name: "Natural Sourdough", ingredients: ["flour", "water", "sourdough starter", "salt"], page: "Bread .html" },
    { id: "Focaccia", name: "Herbed Focaccia", ingredients: ["flour", "water", "yeast", "olive oil", "herbs"], page: "Bread .html" },

    // Bakery - Croissant
    { id: "ButterCroissant", name: "Butter Croissant", ingredients: ["flour", "butter", "yeast", "sugar"], page: "Croissants .html" },
    { id: "PainauChocolat", name: "Pain au Chocolat", ingredients: ["flour", "butter", "chocolate", "yeast"], page: "Croissants .html" },
    { id: "StrawberryDanish", name: "Strawberry Custard Danish", ingredients: ["flour", "butter", "custard", "strawberries"], page: "Croissants .html" },

    // Bakery - Cinnamon
    { id: "ClassicCinnamon", name: "Classic Cinnamon Rolls", ingredients: ["flour", "butter", "cinnamon", "sugar"], page: "Cinnamon.html" },
    { id: "PecanCinnamon", name: "Pecan Cinnamon Rolls", ingredients: ["flour", "butter", "cinnamon", "sugar", "pecans"], page: "Cinnamon.html" },
    { id: "ChocolateCinnamon", name: "Chocolate Cinnamon Rolls", ingredients: ["flour", "butter", "cinnamon", "sugar", "chocolate"], page: "Cinnamon.html" },

    // Bakery - Cookies
    { id: "ChocolateCookies", name: "Chocolate Cookies", ingredients: ["flour", "butter", "sugar", "chocolate"], page: "cookies.html" },
    { id: "ButterBiscuits", name: "Butter Shortbread Biscuits", ingredients: ["flour", "butter", "sugar"], page: "cookies.html" },
    { id: "OatmealCookies", name: "Oatmeal Raisin Cookies", ingredients: ["oats", "flour", "butter", "sugar", "raisins"], page: "cookies.html" },

    // Bakery - Donuts
    { id: "GlazedDonuts", name: "Glazed Donuts", ingredients: ["flour", "sugar", "yeast", "oil"], page: "Donuts .html" },
    { id: "ChocolateDonuts", name: "Chocolate Donuts", ingredients: ["flour", "sugar", "cocoa powder", "yeast", "oil"], page: "Donuts .html" },
    { id: "FilledDonuts", name: "Filled Donuts", ingredients: ["flour", "sugar", "yeast", "jam", "oil"], page: "Donuts .html" },

    // Bakery - Macarons
    { id: "VanillaMacarons", name: "Vanilla Macarons", ingredients: ["almond flour", "sugar", "egg whites", "vanilla"], page: "macrons.html" },
    { id: "PistachioMacarons", name: "Pistachio Macarons", ingredients: ["almond flour", "sugar", "egg whites", "pistachio"], page: "macrons.html" },
    { id: "RaspberryMacrons", name: "Raspberry Macarons", ingredients: ["almond flour", "sugar", "egg whites", "raspberry"], page: "macrons.html" },

    // Dessert
    { id: "tiramisu", name: "Tiramisu", ingredients: ["mascarpone", "coffee", "ladyfingers", "cocoa powder"], page: "dessert.html" },
    { id: "blackforest-cheesecake", name: "Black Forest Cheesecake", ingredients: ["chocolate", "cherries", "cream cheese"], page: "dessert.html" },
    { id: "brownie", name: "Brownies", ingredients: ["chocolate", "flour", "butter", "sugar", "eggs"], page: "dessert.html" },
    { id: "strawberryCake", name: "Strawberry Cake", ingredients: ["flour", "sugar", "butter", "strawberries", "eggs"], page: "dessert.html" },
    { id: "CremeCaramel", name: "Crème Caramel", ingredients: ["milk", "sugar", "eggs", "vanilla"], page: "dessert.html" },
    { id: "cupcake", name: "Cupcake", ingredients: ["flour", "sugar", "butter", "eggs"], page: "dessert.html" },

    // Appetizers
    { id: "deviledeggs", name: "Deviled Eggs", ingredients: ["eggs", "mayonnaise", "mustard"], page: "appetizers.html"},
    { id: "spinachartichokedip", name: "Spinach Artichoke Dip", ingredients: ["spinach", "artichoke", "cream cheese", "sour cream"], page: "appetizers.html" },
    { id: "chickenwings", name: "Chicken Wings", ingredients: ["chicken wings", "hot sauce", "butter"], page: "appetizers.html" },
    { id: "jalapenopoppers", name: "Jalapeno Poppers", ingredients: ["jalapenos", "cheese", "bacon"], page: "appetizers.html" },
    { id: "stuffedmushrooms", name: "Stuffed Mushrooms", ingredients: ["mushrooms", "cheese", "breadcrumbs"], page: "appetizers.html" },
    { id: "Crostini", name: "Crostini", ingredients: ["bread", "toppings", "olive oil"], page: "appetizers.html" },
    { id: "CharcuterieBoard", name: "Charcuterie Board", ingredients: ["meats", "cheese", "fruits", "nuts"], page: "appetizers.html" },
    { id: "Sliders", name: "Sliders", ingredients: ["mini buns", "beef patties", "lettuce", "cheese"], page: "appetizers.html" },
    { id: "ShrimpCocktail", name: "Shrimp Cocktail", ingredients: ["shrimp", "cocktail sauce"], page: "appetizers.html" }
];

function searchdata(mode) {
    const input = document.getElementById("input").value.toLowerCase().trim();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (!input) return;

    if (mode === 'recipe') {
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].name.toLowerCase().includes(input)) {
                const card = document.createElement("div");
                card.innerText = recipes[i].name;
                card.style.padding = "10px";
                card.style.border = "1px solid #ccc";
                card.style.marginBottom = "5px";
                card.style.cursor = "pointer";
                card.style.borderRadius = "6px";
                card.style.backgroundColor = "#DCC4B5";
                card.onclick = () => { window.location.href = `${recipes[i].page}#${recipes[i].id}`; };
                resultsContainer.appendChild(card);
            }
        }
    } else if (mode === 'ingredient') {
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].ingredients.some(ing => ing.toLowerCase().includes(input))) {
                const card = document.createElement("div");
                card.innerText = recipes[i].name + " (Contains: " + recipes[i].ingredients.join(", ") + ")";
                card.style.padding = "10px";
                card.style.border = "1px solid #ccc";
                card.style.marginBottom = "5px";
                card.style.cursor = "pointer";
                card.style.backgroundColor = "#DCC4B5";
                card.style.borderRadius = "6px";
                card.onclick = () => { window.location.href = `${recipes[i].page}#${recipes[i].id}`; };


                resultsContainer.appendChild(card);
            }
        }
    }

    if (resultsContainer.innerHTML === "") {
        resultsContainer.innerHTML = "<p>No recipes found!</p>";
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const hashId = window.location.hash.substring(1);
    const targetCard = document.querySelector(`.recipe-card[data-id="${hashId}"]`);

    if (targetCard) {

        //   hover effect الأول
        targetCard.style.transform = "translateY(-20px)";
        targetCard.style.transition = "all 0.3s ease";
        targetCard.style.boxShadow = "0 5px 10px 5px rgb(0, 0, 0)";

        const detailsId = targetCard.dataset.id + "-card";

        //  بعد ما الـ hover يخلص افتحي الكارد
        setTimeout(() => {
            openCard(null, detailsId);
        }, 800);

        // 🔄 رجوع الشكل الطبيعي
        setTimeout(() => {
            targetCard.style.transform = "";
            targetCard.style.boxShadow = "";
        }, 500);
    }
});