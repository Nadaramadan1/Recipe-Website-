
        function onClick() {
            window.scrollBy({
                top: 740,
                
                behavior: 'smooth'
            });
        }

         function changecolor(element) {
          if( element.style.color == "red"){
                element.style.color = "white";
                 element.title = "add to favorite";
          }else{
               element.style.color = "red";

               element.title = "Added Successfully! ✨";

          }
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
     
          document.addEventListener("DOMContentLoaded", () => {
                    const backBtn = document.getElementById("backbutton");

                    if (backBtn) {
                         backBtn.onclick = function(event) {
                              event.preventDefault();

                              // Check if there is actually a page to go back to in this tab
                              if (window.history.length > 1) {
                                   window.history.back();
                              } else {
                         
                                   window.location.href = "home.html"; 
                              }
                         };
                    }
           });
