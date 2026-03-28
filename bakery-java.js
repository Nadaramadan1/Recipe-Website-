
        function onClick() {
            window.scrollBy({
                top: 740,
                
                behavior: 'smooth'
            });
        }

         function changecolor(element) {
               element.style.color = "red";

               element.title = "Added Successfully! ✨";

          }

          let currentCard = null;

          function openCard(event, cardId) {
               // Prevent the click event from bubbling up to the 'window' object,
               // otherwise the window.onclick listener would immediately close the card we just opened.
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
          /**
           * Global click listener to detect clicks outside the active card.
           */
          window.onclick = function (event) {
               // Check if the clicked element is NOT the card itself 
               // AND is NOT a child element inside the card
               if (currentCard && currentCard.style.display === "block") {
                    if (event.target !== currentCard && !currentCard.contains(event.target)) {
                         currentCard.style.display = "none";
                         currentCard = null;
                    }
               }
          }
