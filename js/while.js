"use strict";
/* While loop question.
expected output:
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
 */
// var x = 2;
// while(x <= 65536){
//    console.log(x);
//    x *= 2;
// }


/*
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50
and 100 representing the amount of cones to sell before you start
your loop. Inside of the loop your code should generate another
random number between 1 and 5, simulating the amount of cones being
bought by her clients. Use a do-while loop to log to the console the
amount of cones sold to each person. The below code shows how to get
the random numbers for this exercise.
 */

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do{
   console.log("number of cones left to sell: " + allCones);

   // This expression will generate a random number between 1 and 5
   var conesSold =  Math.floor((Math.random() * 5) + 1);

   var conesMinus = allCones - conesSold;

  if(conesSold  < allCones){
      console.log(conesSold + " cones sold...");
      allCones -= conesSold;
   }else if(conesSold > allCones){
      console.log("Cannot sell you " + conesSold + " cones. I only have " + allCones);
   }else{
      console.log("Yay! I sold them all!");
      allCones -= conesSold;
   }

}while(allCones > 0);
