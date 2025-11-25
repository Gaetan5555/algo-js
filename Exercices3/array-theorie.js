// Declaration:

let emptyArray = []; // an empty array

let numbersArray = [1, 2, 3]; // an array with 3 numbers

let stringsArray = ["Apple", "Pear", "Banana", "Cherry"]; // an array with 4 strings


console.log("------------")


// Acces specific elements:

let arr = ["Gerard", "Lambert"];

console.log("Hello " + arr[0] + " " + arr[1]);


console.log("------------")

// Modify an element within an array:

let array = [1, 2, 3];

array[2] = 4;

console.log(array); // [1, 2, 4]

console.log("------------")


// Obtain the size of an array:
// <array>.length gives the number of elements in an array

let arrSize = [1, 2, 3];

console.log("The size is " + arrSize.length); // display "The size is 3"

console.log("------------")

// Add and remove elements from an array:


let arrFruit = ["Apple", "Pear", "Banana"];
console.log(arrFruit); // ["Apple", "Pear", "Banana"]


arrFruit.push("Cherry");
console.log (arrFruit); // ["Apple", "Pear", "Banana", "Cherry"]


arrFruit.pop();
console.log(arrFruit); // ["Apple", "Pear", "Banana"]

// push() and pop() respectively. Note that they only work on the end of the array.

console.log("------------")

// Iterate on an array:

// The old-and-ugly-but-it-works:

let arrIterate = ["Apple", "Pear", "Banana"];

for (let i = 0; i < arrIterate.length; i += 1) {
  console.log("Do you want to eat a " + arrIterate[i] + "?");
}

// And the cool-kids:
let arrIterate1 = ["Apple", "Pear", "Banana"];

for (let elem of arrIterate1) {
  console.log("Do you want to eat a " + elem + "?");
}
// The for...of is a specific syntax to iterate on arrays. Try to use it for readability.

console.log("------------")






