"use strict";

// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false
//
// function timesFour(num){
//     if(num == parseInt(num)){
//         return num * 4;
//     }else{
//         return false
//     }
//
// }

// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false
//
// function convertDaystoHours(days){
//     if(days == parseInt(days)){
//         return days * 24;
//     }else{
//         return false;
//     }
// }



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent.
// If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string
// looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false
//
// function calculateTax(totalPaid, taxPercent){
//     if((totalPaid === Number(totalPaid)) && (taxPercent === Number(taxPercent))) {
//         var taxTotal = (taxPercent / 100) * totalPaid;
//         var paidTax = totalPaid + taxTotal;
//         return console.log("$" + paidTax.toFixed(2));
//     }else{
//         return false;
//     }
// }

//ONLINE Practice from https://www.teaching-materials.org/javascript/exercises/ifelse
// Write a function named greaterNum that:
//     takes 2 arguments, both numbers.
//     returns whichever number is the greater (higher) number.
// Checked: Function works

function greaterNum(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

console.log(greaterNum(5, 10));