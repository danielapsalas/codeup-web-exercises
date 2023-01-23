"use strict";
console.log("Hello form external Javascript");
alert("Welcome to my website!");

let favColor = prompt("What is your favorite color?");
alert("Great, I like " + favColor + " too!");

//exercise 3 part 1

let moviePricePerDay = prompt("How many does it cost to rent a movie per day?");
alert("It costs " + moviePricePerDay + " dollar to rent per day.");

let daysLittleMermaid = prompt("How many days did you rented The Little Mermaid?");
alert("Great you rented The Little Mermaid for " + daysLittleMermaid + " days.");

let daysBrotherBear = prompt("How many days did you rented Brother Bear?");
alert("Great you rented Brother Bear for " + daysBrotherBear + " days.");

let daysHercules = prompt("How many days did you rented Hercules?");
alert("Great you rented Hercules for " + daysHercules + " days.");

let priceLittleMermaid = daysLittleMermaid * moviePricePerDay;
let priceBrotherBear = daysBrotherBear * moviePricePerDay;
let priceHercules = daysHercules * moviePricePerDay;
let totalPrice = priceLittleMermaid + priceBrotherBear + priceHercules;

alert("Each day of rental costs 3 dollars, which makes your total:\n"
    + "\nThe Little Mermaid: " + priceLittleMermaid+ " dollars."
    + "\nBrother Bear: " + priceBrotherBear+ " dollars."
    + "\nHercules: " + priceHercules + " dollars."
    + "\nTotal: " + totalPrice + " dollars.");

//exercise 3 part 2

let ratePerHrGoogle = prompt("How much does Google pay per hour? ");
alert("Okay Google pays " + ratePerHrGoogle + " per hour.");
let hoursWorkedGoogle = prompt("How many hours did you worked for Google? ");
alert("Okay you worked " + hoursWorkedGoogle + " hours at Google.");

let ratePerHrAmazon = prompt("How much does Amazon pay per hour? ");
alert("Okay Amazon pays " + ratePerHrAmazon + " per hour.");
let hoursWorkedAmazon = prompt("How many hours did you worked for Amazon? ");
alert("Okay you worked " + hoursWorkedAmazon + " hours at Amazon.");

let ratePerHrFacebook = prompt("How much does Facebook pay per hour? ");
alert("Okay Facebook pays " + ratePerHrFacebook + " per hour.");
let hoursWorkedFacebook = prompt("How many hours did you worked for Facebook? ");
alert("Okay you worked " + hoursWorkedFacebook + " hours at Facebook.");

let payGoogle = ratePerHrGoogle * hoursWorkedGoogle;
let payAmazon = ratePerHrAmazon * hoursWorkedAmazon;
let payFacebook = ratePerHrFacebook * hoursWorkedFacebook;
let totalPay = payGoogle + payAmazon + payFacebook;

alert("Each day of rental costs 3 dollars, which makes your total:\n"
    + "\nPay for Google: " + payGoogle + " dollars."
    + "\nPay for Amazon: " + payAmazon + " dollars."
    + "\nPay for Facebook: " + payFacebook + " dollars."
    + "\nTotal: " + totalPay + " dollars.");


//exercise 3 part 3

let classTotal = prompt("What is the maximum amount of students" +
    " that can be enrolled? ");
let currentClassSize = prompt("What is the current amount of students enrolled?");
let classSchedule = prompt("Does this schedule work with the students schedule?");
let studentCanEnroll = ((classTotal > currentClassSize) && (classSchedule == "Yes"));

alert("Can the student enroll: " + studentCanEnroll );


//exercise 3 part 4

let moreThan2Items = prompt("Do you have more than two items? ")
let hasTheOfferExpired = prompt("Has the offer expired? ");
let premium = prompt("Are you a premium member");

if((moreThan2Items == "Yes)") && (hasTheOfferExpired == "No") && (premium == "Yes"))
{
    alert("Product offer can apply.");
}
else if ((moreThan2Items == "Yes") && (hasTheOfferExpired == "No"))
{
    alert("Product offer can apply.");
}
else if ((moreThan2Items == "No") && (hasTheOfferExpired == "No") && (premium == "Yes"))
{
    alert("Product offer can apply.");
}
else
{
    alert("Product offer does not apply.");
}


