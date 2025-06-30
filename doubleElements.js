/* ---------- extract element ---------- */
const numbers = [1,2,3,4,5];
const doubledNumbers =  numbers.map((number) => {
    return number *2;
    //return Math.pow(number,2);
});

console.log(doubledNumbers);



const users =[
    {id:1, name:"gogo", age:20 },
    {id:2, name:"evo", age:20 },
    {id:3, name:"best", age:20 }
];

const allNames = users.map((user) => user.name)
console.log(allNames);

/* ---------- reduce ---------- */

const Nbers = [1,2,3,4,5,6,7,8,9,10];

const sum = Nbers.reduce((acc,curr) => {
    return acc += curr ;
},0) //zero is the initial value for the accumulator

console.log(sum);

const word =[["i"],["am"],["by","the"],["names","of","evo"]];

const sentence = word.reduce((acc,curr) => {
    return acc.concat(curr);
},[]);//[] the initailvalue is an empty array

console.log(sentence);

const fruits = ["banana","apple","pineappple","orange","banana","pineapple","orange"];

const fruitCounts = fruits.reduce((acc,fruit) =>{
    acc[fruit] = (acc[fruit] || 0) +1;
    return acc;
},{})// {} means empty object

console.log(fruitCounts);

/* ---------- slice ---------- */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));      // Output: ["camel", "duck", "elephant"] (from index 2 to end)
console.log(animals.slice(2, 4));   // Output: ["camel", "duck"] (from index 2 up to index 4 - 1)
console.log(animals.slice(1, 5));   // Output: ["bison", "camel", "duck", "elephant"]

const animal = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(-2));     // Output: ["duck", "elephant"] (last 2 elements)
console.log(animals.slice(2, -1));  // Output: ["camel", "duck"] (from index 2 up to the second-to-last element)

/* ---------- splice ---------- */

const months = ['Jan', 'March', 'April', 'May'];

months.splice(1, 0, 'Feb'); // At index 1, delete 0 elements, add 'Feb'
console.log(months);        // Output: ["Jan", "Feb", "March", "April", "May"]

months.splice(4, 1);       // At index 4, delete 1 element ('May')
console.log(months);       // Output: ["Jan", "Feb", "March", "April"]