// Write a function list that takes an array of words and
//  returns a string by concatenating the words in the array
// , separated by commas and - the last word - by an 'and'.
//  An empty array should return an empty string.

// Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey

function list(arr){

if(arr.length === 0){
return '';
}
if(arr.length === 1){
return arr[0];
}
var firstWords = arr.slice(0,-1);
var lastWord = arr[arr.length-1];
return firstWords.join(', ') + ' and '+ lastWord;
}