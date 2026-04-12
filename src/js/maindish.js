// ============================== SCROLL BUTTON ==============================
function onClick() {
    window.scrollBy({
        top: 740,
        behavior: 'smooth'
    });
}


// ============================== HEART BUTTON ==============================
function changecolor(heartIcon) {
    heartIcon.classList.toggle('active');

    const card = heartIcon.closest('.recipe-content-box');
    const title = card ? card.querySelector('h2').innerText : null;

    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

    if (heartIcon.classList.contains('active')) {
        heartIcon.style.color = "red";

        if (title) {
            const recipe = {
                id: title.toLowerCase().replace(/\s/g, '-'),
                title: title
            };

            if (!favorites.some(fav => fav.title === title)) {
                favorites.push(recipe);
                localStorage.setItem('myFavorites', JSON.stringify(favorites));
            }
        }

    } else {
        heartIcon.style.color = "white";

        if (title) {
            favorites = favorites.filter(fav => fav.title !== title);
            localStorage.setItem('myFavorites', JSON.stringify(favorites));
        }
    }
}


// ============================== OPEN CARD ==============================
let currentCard = null;

function openCard(event, cardId) {
    if (event && event.stopPropagation) {
        event.stopPropagation();
    }

    if (currentCard) {
        currentCard.style.display = "none";
    }

    const targetCard = document.getElementById(cardId);

    if (targetCard) {
        targetCard.style.display = "block";
        currentCard = targetCard;
    }
}


// ============================== CLOSE OUTSIDE CARD ==============================
window.onclick = function (event) {
    if (currentCard && currentCard.style.display === "block") {
        if (!currentCard.contains(event.target)) {
            currentCard.style.display = "none";
            currentCard = null;
        }
    }
};


// ============================== BACK BUTTON ==============================
document.addEventListener("DOMContentLoaded", () => {
    const backBtn = document.getElementById("backbutton");

    if (backBtn) {
        backBtn.onclick = function (event) {
            event.preventDefault();

            // Check if there is actually a page to go back to in this tab
            if (window.history.length > 1) {
                window.history.back();
            } else {

                window.location.href = "../../index.html";
            }
        };
    }
});

// ============================== ADMIN VIEW (OPEN FROM LINK) ==============================
document.addEventListener("DOMContentLoaded", function () {

    const hash = window.location.hash.substring(1);

    if (hash) {

        const card = document.getElementById(hash);

        if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });

            // ✨ Highlight effect
            card.style.transition = "all 0.3s ease";
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

            setTimeout(() => {
                card.style.transform = "";
                card.style.boxShadow = "";
            }, 1000);
        }

        // 🔥 OPEN DETAILS CARD
        const details = document.getElementById(hash + "Card");

        if (details) {
            if (currentCard) {
                currentCard.style.display = "none";
            }

            details.style.display = "block";
            currentCard = details;
        }
    }
});