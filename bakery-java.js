
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
          /**
           * Global click listener to detect clicks outside the active card.
           */
          window.onclick = function (event) {
               // Check if the clicked element is NOT the card itself 
               // AND is NOT a child element inside the card
               if (currentCard && currentCard.style.display === "block") {
                    if (!currentCard.contains(event.target)) {
                         currentCard.style.display = "none";
                         currentCard = null;
                    }
               }
          }

          


     //================================Go Back=========================================
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

     //================================Admin Features=========================================
//         	window.addEventListener("load", function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     let recipeId = urlParams.get('id');

//     if (recipeId) {
//         // إزالة أي مسافات أو رموز غريبة قد تكون انتقلت في الرابط
//         recipeId = recipeId.trim(); 
        
// 		setTimeout(() => {
//             openCard(null, recipeId);

// 			const element = document.getElementById(recipeId);
// 			if (element) {
// 				element.scrollIntoView({ behavior: 'smooth', block: 'center' });
// 			}
//         }, 100);
         
//     }
// });       
