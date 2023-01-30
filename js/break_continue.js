"use strict";

//original answer
// var usersOddNum = prompt("Enter an odd number.");
//
//     for (i = 1; i <= 50; i++) {
//         if (parseInt(usersOddNum) === i) {
//             console.log("Yikes! Skipping number: " + usersOddNum);
//         }
//         console.log("Here is the odd number: " + i);
//     }

//original answer modifies to get number from user without parse int
// var usersOddNum = Number(prompt("Enter an odd number."));
//
//     for (i = 1; i <= 50; i++) {
//         if (usersOddNum === i) {
//             console.log("Yikes! Skipping number: " + usersOddNum);
//         }
//         console.log("Here is the odd number: " + i);
//     }

// Class answer
// var userInput;
// while(true){
//     userInput = Number(prompt("enter a odd number between 1 and 50"));
//     if(userInput % 2 === 1 && userInput >= 1 && userInput <= 50){
//         break;
//     }
// }



//if(usersOddNum % 2 !== 0){
//         var askAgain = prompt("Try again. Enter an actual odd number.");
//     }