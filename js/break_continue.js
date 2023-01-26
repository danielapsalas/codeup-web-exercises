"use strict";

var usersOddNum = prompt("Enter an odd number.");

    for (i = 1; i <= 50; i++) {
        if (parseInt(usersOddNum) === i) {
            console.log("Yikes! Skipping number: " + usersOddNum);
        }
        console.log("Here is the odd number: " + i);
    }



//if(usersOddNum % 2 !== 0){
//         var askAgain = prompt("Try again. Enter an actual odd number.");
//     }