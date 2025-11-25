// Exercise 3.1

// Write a program that will add all the elements of an array.

// Test it with the following arrays:

    // [1, 2, 3, 4, 5] => 15
    // [100, 101, 102] => 303



let array = [1, 2, 3, 4, 5]
let sum = 0

for (let number of array){
    sum += number;
}
  console.log("The sum of those numbers is:" + " " + sum)

console.log("-------------------")


// NOTE: Attention pour faire la somme il faut absolument sortir le console log du for{}

let arr = [100, 101, 102]
let total = 0

// for (let chiffre of arr){
//    total += chiffre;
// }
// console.log("Mon total est de:" + total)


console.log("-------------------")

for (let chiffre of arr){
   total += chiffre;
   console.log("Mon total est de:" + total)
}




