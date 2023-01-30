"use strict";

//number 2 of loop exercises
function showMultiplicationTable(num){
    for (var i = 1; i < 11; i++) {
        console.log(num + "x" + i + "=" + num * i);
    }
}

//number 3 of loop exercises
function isItEven(num){
    if(num % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

for (var i = 0; i < 10; i++){
    var randomNumber = Math.floor((Math.random() * 180) * 20);
    console.log((parseInt(randomNumber)) + " is " + isItEven(parseInt(randomNumber)));
}

// another way for number 3
// for (var i = 0; i < 10; i++){
//     var randomNumber = Math.floor((Math.random() * 180) * 20);
//
//     if(num % 2 === 0){
//         console.log(randomNumber + " is even".)
//     }else{
//         console.log(randomNumber + " is odd");
//     }
// }

//number 4 of loop exercises
var treeSize = prompt("How many rows do you want your tree to be?");
alert("check console " + halfTree(treeSize));
function halfTree(x) {
    var space = " ";
    for (var m = 1; m <= x; m++) {
       space = space + m;
       console.log(space);
    }
}

//other way to do number 4
// for(var i = 1; i <= 9;i++){
//     var string = "";
//     for(var n = 1;n <= i; n++){
//         string += i;
//     }
//     console.log(string);
// }

//other way to do number 4
// for( var i =1 i<= 9; i++){
//     console.log(i.toString().repeat());
// }

//number 5 of for loop exer
for(var x = 100; x >= 5; x--){
    if (parseInt(x) % 5 == 0) console.log(x);
}
