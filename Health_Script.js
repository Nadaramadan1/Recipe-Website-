// Health_Script.js

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

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close-btn');
    const viewButtons = document.querySelectorAll('.btn-healthy');

    
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
                            <button class="heart-btn" onclick="toggleHeart(this)">❤</button>
                        </div>
                    </div>
                `;
                modal.style.display = "block";
                
               
                document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
            }
        });
    });

   
    window.toggleHeart = (btn) => {
        btn.classList.toggle('active');
        btn.style.color = btn.classList.contains('active') ? '#e74c3c' : 'white';
    };

    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
});