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
    var randomNumber = Math.random() * (200 -20) + 20;
    console.log((parseInt(randomNumber)) + " is " + isItEven(parseInt(randomNumber)));
}

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

for(var x = 100; x >= 5; x--){
    if (parseInt(x) % 5 == 0) console.log(x);
}

