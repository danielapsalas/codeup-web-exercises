"use strict";

var usersOddNum = prompt("Enter an odd number.");
for (i = 1; i <= 50; i++){
    if(usersOddNum % 2 !== 0){
        var askAgain = prompt("Try again. Enter an actual odd number.");
    }
}