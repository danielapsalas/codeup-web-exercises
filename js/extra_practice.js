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
//
// function greaterNum(num1, num2){
//     if(num1 > num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }
//
// console.log(greaterNum(5, 10));



// Write a function named helloWorld that:
//     takes 1 argument, a language code (e.g. "es", "de", "en")
//     returns "Hello, World" for the given language, for atleast
//     3 languages. It should default to returning English.
//
// function helloWorld(lang){
//     if(lang == 'es') {
//         return 'Hola, Mundo';
//     }else if(lang == 'de'){
//         return 'Hallo Welt';
//     }else{
//         return 'Hello, World';
//     }
// }
//
// console.log(helloWorld('es'));
// console.log(helloWorld('de'));
// console.log(helloWorld('es'));



//Correct this code
// function colorMessage(favoriteColor, shirtColor) {
//     if (favoriteColor === shirtColor) {
//         return ‘The shirt is your favorite color!’;
//     } else {
//         return ‘That is a nice color.’; }}
// console.log(colorMessage(‘black’, ‘white’));
//
//Corrected code
// function colorMessage(favoriteColor, shirtColor) {
//     if (favoriteColor === shirtColor) {
//         return "The shirt is your favorite color!";
//     } else {
//         return "That is a nice color.";
//     }
// }
// console.log(colorMessage("black", "white"));



// Write a JavaScript conditional statement to find the largest of five numbers.
// Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
//
// var num1 = prompt("Enter 1st number: ");
// var num2 = prompt("Enter 2nd number: ");
// var num3 = prompt("Enter 3rd number: ");
// var num4 = prompt("Enter 4th number: ");
// var num5 = prompt("Enter 5th number: ");
//
// function largestOf5(num1, num2, num3, num4, num5){
//     if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
//         alert("The largest num is: " + num1);
//     }else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
//         alert("The largest num is: " + num2);
//     }else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
//         alert("The largest num is: " + num3);
//     }else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
//         alert("The largest num is: " + num4);
//     }else if(num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
//         alert("The largest num is: " + num5);
//     }else{
//         alert("ERROR");
//     }
// }
//
// alert(largestOf5(num1, num2, num3, num4, num5));



// You are given a variable marks. Your task is to print:
//
//     - AA if marks is greater than 90.
//     - AB if marks is greater than 80 and less than or equal to 90.
//     - BB if marks is greater than 70 and less than or equal to 80.
//     - BC if marks is greater than 60 and less than or equal to 70.
//     -CC if marks is greater than 50 and less than or equal to 60.
//     - CD if marks is greater than 40 and less than or equal to 50.
//     - DD if marks is greater than 30 and less than or equal to 40.
//     - FF if marks is less than or equal to 30.
//
// var userGrade = prompt("Enter your grade in integer form: ");
// function checkGrade(grade){
//     if(grade > 90){
//         alert("Grade is: AA");
//     }else if(grade > 80 && grade <= 90){
//         alert("Grade is: AB");
//     }else if(grade > 70 && grade <= 80){
//         alert("Grade is: BB");
//     }else if(grade > 60 && grade <= 70){
//         alert("Grade is: BC");
//     }else if(grade > 50 && grade <= 60){
//         alert("Grade is: CC");
//     }else if(grade > 40 && grade <= 50){
//         alert("Grade is: CD");
//     }else if(grade > 30 && grade <= 40){
//         alert("Grade is: DD");
//     }else if(grade <= 30){
//         alert("Grade is: CC");
//     }
// }
//
// checkGrade(userGrade);

//Reverse Input
// function reversingInput(input){
//     input = input + "";
//     return input.split("").reverse().join("");
// }
