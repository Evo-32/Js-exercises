//  Write a function multiply(a, b)` that returns the product of a and b. 
//     - If two arguments are provided, return their product.
//     - If only one argument is provided:
//         - If it's a number, return it doubled.
//         - If it's an array of numbers, return the array with all elements 

function multiply(a, b) {
  if (Array.isArray(a)) {
    return a.map((number) => number * 2);
  } else if (typeof a === "number" && b === undefined) {
    return a*2; 
  } else if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return "Invalid input";
  }
}

// Test cases
console.log(multiply(2));           // 4       → squared
console.log(multiply(0.5));         // 2.25    → squared
console.log(multiply(1, 3));        // 3       → multiplication
console.log(multiply([1, 2, 3]));   // [2, 4, 6] → doubled array

