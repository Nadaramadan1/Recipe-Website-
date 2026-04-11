// --- Page Initialization ---
// Consolidates all setup logic into one listener to ensure correct execution order
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const recipesContainer = document.getElementById('recipes-container');
    const modal = document.getElementById('recipeModal');
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // 1. --- Render Custom Recipes ---
    // Create new cards for healthy recipes added via the Admin panel
    if (recipesContainer && storedRecipes.length > 0) {
        storedRecipes.forEach(r => {
            const courseLower = (r.course || "").toLowerCase();
            if (courseLower.includes('healthy')) {
                let rId = r.id.toLowerCase();
                if (rId.endsWith('card')) rId = rId.slice(0, -4);
                
                if (!document.getElementById(rId)) {
                    const newCard = document.createElement('div');
                    newCard.className = 'recipe-card all keto'; 
                    newCard.id = rId;
                    newCard.innerHTML = `
                        <div class="card-image" style="background-image: url('healthy_images/Grilled Salmon & Avocado Salad.jfif');">
                            <span class="diet-badge">Custom</span>
                            <button class="grid-heart-btn" onclick="changecolor(this)" aria-label="Favorite">❤</button>
                        </div>
                        <div class="card-body">
                            <h3>${r.name}</h3>
                            <p>${r.description || r.ingredients || "A new delicious healthy recipe."}</p>
                            <div class="card-info">
                                <span>⏱ 20 min</span>
                                <span>🔥 350 kcal</span>
                            </div>
                            <a href="#" class="btn-healthy">View Recipe</a>
                        </div>
                    `;
                    recipesContainer.appendChild(newCard);
                }
            }
        });
    }

    // 2. --- Admin Delete Support ---
    // Hide original cards if they have been deleted in the Admin panel
    const allCards = document.querySelectorAll('.recipe-card');
    if (storedRecipes.length > 0) {
        allCards.forEach(card => {
            const cardId = card.id.toLowerCase();
            const isAlive = storedRecipes.some(r => {
                let rId = r.id.toLowerCase();
                if (rId.endsWith('card')) rId = rId.slice(0, -4);
                return rId === cardId;
            });
            if (!isAlive) card.style.display = 'none';
        });
    }

    // --- Static Recipe Data fallback ---
    const defaultData = {
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

    // 3. --- Event Delegation for "View Recipe" ---
    // Handles clicks for ALL cards (even ones added after page load)
    if (recipesContainer) {
        recipesContainer.addEventListener('click', (e) => {
            // Find the closest button or card that was clicked
            const viewBtn = e.target.closest('.btn-healthy');
            if (!viewBtn) return;
            
            e.preventDefault();
            const card = viewBtn.closest('.recipe-card');
            const titleElement = card.querySelector('h3');
            const title = titleElement ? titleElement.innerText.trim() : "";
            const bgImage = card.querySelector('.card-image').style.backgroundImage;

            console.log("🔍 View button clicked for:", title);

            // --- Database Search ---
            // Look in localStorage first, then fallback to defaults
            const updated = storedRecipes.find(r => {
                let rId = r.id.toLowerCase();
                if (rId.endsWith('card')) rId = rId.slice(0, -4);
                return rId === card.id.toLowerCase() || r.name.trim().toLowerCase() === title.toLowerCase();
            });

            // Data selection logic
            const fallback = defaultData[title] || { ingredients: [], method: "Preparation steps coming soon..." };
            let finalIngredients = fallback.ingredients;
            let finalMethod = fallback.method;
            let finalTitle = title;

            if (updated) {
                finalTitle = updated.name;
                if (updated.ingredients) {
                    finalIngredients = updated.ingredients.split(/,|\n/).map(i => i.trim()).filter(i => i);
                }
                if (updated.description) finalMethod = updated.description;
            }

            // --- Modal Activation ---
            const modalContent = document.querySelector('.glass-card');
            if (modalContent) {
                modalContent.style.backgroundImage = bgImage;
                modalContent.style.backgroundSize = "cover";
                modalContent.style.backgroundPosition = "center";
            }
            
            const modalBody = document.getElementById('modalBody');
            if (modalBody) {
                modalBody.innerHTML = `
                    <div class="modal-overlay-content">
                        <span class="close-btn">&times;</span> 
                        <h2 class="modal-title">${finalTitle}</h2>
                        <span class="section-title">Ingredients</span>
                        <ul class="modal-list">${finalIngredients.map(i => `<li>• ${i}</li>`).join('')}</ul>
                        <span class="section-title">Preparation Steps</span>
                        <p class="modal-text">${finalMethod}</p>
                        <div class="modal-footer">
                            <button class="heart-btn" onclick="changecolor(this)">❤</button>
                        </div>
                    </div>
                `;
                modal.style.display = "block";
                
                // Re-attach close event for newly generated HTML content
                const dynamicClose = modalBody.querySelector('.close-btn');
                if (dynamicClose) dynamicClose.onclick = () => modal.style.display = "none";
            }
        });
    }

    // 4. --- Category Filters ---
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const selectedDiet = btn.getAttribute('data-diet');
            
            document.querySelectorAll('.recipe-card').forEach(card => {
                // Determine if Admin deleted this card
                const isDeleted = card.style.display === 'none';
                if (isDeleted && !card.classList.contains('hidden-by-filter')) return;

                const matchesFilter = selectedDiet === 'all' || card.classList.contains(selectedDiet);
                card.style.display = matchesFilter ? 'flex' : 'none';
                if (!matchesFilter) card.classList.add('hidden-by-filter');
                else card.classList.remove('hidden-by-filter');
            });
        });
    });

    // Close modal settings
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };
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
                
                // 4. Highlight animation 
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

