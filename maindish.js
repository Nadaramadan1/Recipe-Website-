// Scroll لما تدوسي على View Recipes
function onClick() {
    const section = document.getElementById("recipes");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// تغيير لون القلب (Favorites)
function changecolor(element) {
    if (element.style.color == "red") {
        element.style.color = "white";
        element.title = "add to favorite";
    } else {
        element.style.color = "red";
        element.title = "Added Successfully! ✨";
    }
}

// فتح الكارد
let currentCard = null;

function openCard(event, cardId) {
    if (event) event.stopPropagation();

    if (currentCard) {
        currentCard.style.display = "none";
    }

    const targetCard = document.getElementById(cardId);

    if (targetCard) {
        targetCard.style.display = "block";
        currentCard = targetCard;
    }
}

// قفل الكارد لما تدوسي بره
window.onclick = function (event) {
    if (currentCard && currentCard.style.display === "block") {
        if (event.target !== currentCard && !currentCard.contains(event.target)) {
            currentCard.style.display = "none";
            currentCard = null;
        }
    }
}