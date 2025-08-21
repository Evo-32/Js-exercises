// Write a function halve that copy the first half of an array.
//  With an odd number of array elements,
//   the middle element should belong to the first half.

// Example: halve([1, 2, 3, 4]) should return [1, 2].

function halve(arr){
var half = Math.ceil(arr.length/2);
return arr.slice(0,arr.length/2);
}