// Health_Script.js

// --- Initial Section Rendering ---
// This listener handles the basic filtering when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedDiet = btn.getAttribute('data-diet');

            recipeCards.forEach(card => {
                if (selectedDiet === 'all' || card.classList.contains(selectedDiet)) {
                    card.style.display = 'flex';
                    
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});





function showNoResults(count) {
    let msg = document.getElementById('no-results');
    if (count === 0) {
        if (!msg) {
            msg = document.createElement('p');
            msg.id = 'no-results';
            msg.innerText = "No recipes found for this category yet. Stay tuned! 🥗";
            msg.style.textAlign = 'center';
            document.querySelector('.recipes-grid').appendChild(msg);
        }
    } else if (msg) {
        msg.remove();
    }
}

// --- Detailed Modal & Dynamic Data ---
// This section handles the generation of the recipe info pop-up
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close-btn');
    const viewButtons = document.querySelectorAll('.btn-healthy');

    
    /**
 * Healthy Food Page Script
 * Handles recipe dynamic rendering, filtering by diet, modal popups, and favorites storage.
 */

// --- Recipe Data Store ---
// Contains details for all healthy recipes shown in the grid
const recipes = {
        "Grilled Salmon & Avocado": { 
            ingredients: ["150g Salmon fillet", "1 tbsp Olive oil", "Minced garlic", "Lemon slices", "Steamed asparagus"],
            method: "1. Season salmon with garlic and pepper. 2. Grill for 4-5 minutes each side. 3. Serve with asparagus and lemon."
        },
        "Quinoa Buddha Bowl": {
            ingredients: ["1 cup cooked quinoa", "1/2 cup chickpeas", "Sliced avocado", "Shredded carrots", "Fresh spinach", "Tahini dressing"],
            method: "1. Base the bowl with fresh spinach and cooked quinoa. 2. Arrange chickpeas, carrots, and avocado on top. 3. Drizzle with tahini and enjoy."
        },
        "Lemon Herb Chicken": {
            ingredients: ["2 Chicken breasts", "1 Lemon", "Fresh Rosemary", "Olive oil", "Steamed broccoli"],
            method: "1. Marinate chicken with lemon and herbs. 2. Grill until golden. 3. Serve with broccoli."
        },
        "Zucchini Noodles (Zoodles)": {
            ingredients: ["2 Zucchinis", "Cherry tomatoes", "Pesto sauce", "Garlic", "Parmesan"],
            method: "1. Spiralize zucchinis. 2. Sauté with garlic and tomatoes. 3. Toss with pesto and cheese for 3 minutes."
        }
    };

 
viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.recipe-card');
            const title = card.querySelector('h3').innerText;
            const data = recipes[title];
            const bgImage = card.querySelector('.card-image').style.backgroundImage;

            if (data) {
                const modalContent = document.querySelector('.glass-card');
                modalContent.style.backgroundImage = bgImage;
                
                document.getElementById('modalBody').innerHTML = `
                    <div class="modal-overlay-content">
                        <span class="close-btn">&times;</span> 
                        <h2 class="modal-title">${title}</h2>
                        <span class="section-title">Ingredients</span>
                        <ul class="modal-list">${data.ingredients.map(i => `<li>• ${i}</li>`).join('')}</ul>
                        <span class="section-title">Preparation Steps</span>
                        <p class="modal-text">${data.method}</p>
                        <div class="modal-footer">
                            <button class="heart-btn" onclick="changecolor(this)">❤</button>
                        </div>
                    </div>
                `;
                modal.style.display = "block";
                
               
                document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
            }
        });
    });

    // Close modal when clicking on the dark background
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };

    // Tabs logic
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const selectedDiet = btn.getAttribute('data-diet');
            recipeCards.forEach(card => {
                card.style.display = (selectedDiet === 'all' || card.classList.contains(selectedDiet)) ? 'flex' : 'none';
            });
        });
    });
});

// --- Favorites Management ---
/**
 * changecolor (Toggle Favorite)
 * Saves or removes a recipe from the browser's localStorage favorites list.
 * @param {HTMLElement} heartIcon - The heart button element that was clicked.
 */
function changecolor(heartIcon) {
    // 1. Toggle the visual look
    heartIcon.classList.toggle('active');
    
    // Manage colors based on active state
    if (heartIcon.classList.contains('active')) {
        heartIcon.style.color = "#e74c3c"; // Red when active
        
        // 2. Find the recipe details
        let title, image;
        const modalContainer = heartIcon.closest('.modal-overlay-content');
        const gridCard = heartIcon.closest('.recipe-card');
        
        if (modalContainer) {
            // Case: Clicked inside the detailed modal
            title = modalContainer.querySelector('.modal-title').innerText;
            const glassCard = heartIcon.closest('.glass-card');
            image = glassCard.style.backgroundImage;
        } else if (gridCard) {
            // Case: Clicked on a card in the main grid
            title = gridCard.querySelector('h3').innerText;
            const imageContainer = gridCard.querySelector('.card-image');
            image = imageContainer.style.backgroundImage;
        }

        // Clean and Quote the image URL for CSS validity
        if (image && image !== 'none') {
            // Remove url() wrapper and any existing quotes
            let cleanPath = image.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            // Wrap in single quotes to handle spaces and special characters
            image = `'${cleanPath}'`;
        } else {
            image = '';
        }
        
        // Create a recipe object with the safe image path
        const recipe = {
            id: title.toLowerCase().replace(/\s/g, '-'),
            title: title,
            image: image
        };

        // 3. Save to localStorage
        let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];
        
        // Only add if not already present
        if (!favorites.some(fav => fav.title === title)) {
            favorites.push(recipe);
            localStorage.setItem('myFavorites', JSON.stringify(favorites));
        }
    } else {
        // Reset color when deactivating
        heartIcon.style.color = ""; 
    }
}

// --- Admin & Search Integration ---
/**
 * URL Hash Listener
 * Automatically scrolls to and highlights a recipe if requested via URL hash (#id).
 */
window.addEventListener("load", function() {
    // 1. Get the recipe ID from the URL hash (e.g., #grilled_salmon_avocado)
    let recipeId = window.location.hash.substring(1);
    
    if (recipeId) {
        // Use a short delay to ensure everything is rendered
        setTimeout(function() {
            // 2. Find the recipe card on the grid
            const targetCard = document.getElementById(recipeId);
            
            if (targetCard) {
                // 3. Scroll safely to the card
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // 4. Highlight animation (similar to bakery style)
                targetCard.style.transition = "all 0.4s ease";
                targetCard.style.transform = "translateY(-15px)";
                targetCard.style.boxShadow = "0 15px 35px rgba(39, 174, 96, 0.4)";
                
                // 5. Automatically open the modal content
                // Since modal content is dynamic, we trigger the click on the "View Recipe" button
                const viewBtn = targetCard.querySelector('.btn-healthy');
                if (viewBtn) {
                    setTimeout(() => {
                        viewBtn.click();
                        
                        // Return card to normal position after highlight
                        setTimeout(() => {
                            targetCard.style.transform = "";
                            targetCard.style.boxShadow = "";
                        }, 1000);
                    }, 600);
                }
            }
        }, 500);
    }
});

