
        
//==============================  heart button==================================
         function changecolor(element) {
          if( element.style.color == "red"){
                element.style.color = "white";
                 element.title = "add to favorite";
          }else{
               element.style.color = "red";

               element.title = "Added Successfully! ✨";

          }
          }

// =================================== OPEN CARD==============================================
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
// window.addEventListener("load", function() {
//     // Get the recipe ID from the URL hash (everything after #)
//     let recipeId = window.location.hash.substring(1);
    
//     // Remove 'card' suffix if present (clean the ID)
//     if (recipeId && recipeId.endsWith('card')) {
//         recipeId = recipeId.replace('card', '');
//     }
//     if (recipeId && recipeId.endsWith('-card')) {
//         recipeId = recipeId.replace('-card', '');
//     }

//     if (recipeId) {
//         // Add a longer delay to ensure the DOM is fully ready
//         setTimeout(function() {
//             // Try to open the details card
//             const detailsCardId = recipeId + 'card';
//             const detailsCard = document.getElementById(detailsCardId);
            
//             if (detailsCard) {
//                 // Close any open card first
//                 if (currentCard) {
//                     currentCard.style.display = "none";
//                 }
                
//                 // Open the card
//                 detailsCard.style.display = "block";
//                 currentCard = detailsCard;
                
//                 // Find and scroll to the recipe card
//                 const element = document.getElementById(recipeId);
//                 if (element) {
//                     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
//                     // Add highlight effect
//                     element.style.transition = "all 0.3s ease";
//                     element.style.transform = "translateY(-10px)";
//                     element.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
                    
//                     setTimeout(function() {
//                         element.style.transform = "";
//                         element.style.boxShadow = "";
//                     }, 1000);
//                 }
//             } else {
//                 console.log("Card not found:", detailsCardId);
//             }
//         }, 500); // Increased delay to 500ms
//     }
// });


// ************************************************************

// window.addEventListener("DOMContentLoaded", function() {
//     // Get the recipe ID from URL hash (e.g., #Baguette or #Baguette-card)
//     let recipeId = window.location.hash.substring(1);
    
//     if (recipeId) {
//         console.log("Hash detected:", recipeId);
        
//         setTimeout(function() {
//             // Try to find the details card directly first
//             let detailsCard = document.getElementById(recipeId);
            
//             // If not found, try adding '-card' (for bakery pages)
//             if (!detailsCard && !recipeId.endsWith('-card')) {
//                 detailsCard = document.getElementById(recipeId + '-card');
//             }
            
//             // If still not found, try adding 'card' (for appetizers style)
//             if (!detailsCard && !recipeId.endsWith('card')) {
//                 detailsCard = document.getElementById(recipeId + 'card');
//             }
            
//             if (detailsCard) {
//                 console.log("Found details card:", detailsCard.id);
                
//                 // Close any open card
//                 if (currentCard) {
//                     currentCard.style.display = "none";
//                 }
                
//                 // Open the card
//                 detailsCard.style.display = "block";
//                 currentCard = detailsCard;
                
//                 // Find and highlight the recipe card
//                 // Remove '-card' or 'card' suffix to get recipe card ID
//                 let recipeCardId = recipeId;
//                 if (recipeCardId.endsWith('-card')) {
//                     recipeCardId = recipeCardId.replace('-card', '');
//                 }
//                 if (recipeCardId.endsWith('card')) {
//                     recipeCardId = recipeCardId.replace('card', '');
//                 }
                
//                 const recipeCard = document.getElementById(recipeCardId);
//                 if (recipeCard) {
//                     recipeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
//                     // Highlight effect
//                     recipeCard.style.transition = "all 0.3s ease";
//                     recipeCard.style.transform = "translateY(-10px)";
//                     recipeCard.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
                    
//                     setTimeout(function() {
//                         recipeCard.style.transform = "";
//                         recipeCard.style.boxShadow = "";
//                     }, 1000);
//                 }
//             } else {
//                 console.log("Details card not found for:", recipeId);
//             }
//         }, 500);
//     }
// });