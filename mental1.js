// const sumByCategory = (data) => {
//   const result = {};
//   for (const { category, value } of data) {
//     result[category] = (result[category] || 0) + value;
//   }
//   return result;
// };
// const data = [
//   { category: "A", value: 10 },
//   { category: "B", value: 20 },
//   { category: "A", value: 15 },
//   { category: "C", value: 5 },
//   { category: "B", value: 25 },
// ];
// console.log(sumByCategory(data));


// const assignId = (arr) => {
//     const result = {}
//     for (const {id,name} of arr){
//         result[id] = name;
//     }
//     return result
// }
// const person = [
//     {id:1, name:'sam'},
//     {id:2, name:'mary'},
//     {id:3, name:'alice'}
// ]
// console.log(assignId(person))


// const names = (arr) =>{
//   let result = []
//   for(const {name,age} of arr){
//     if(age > 18){
//        result.push(name.toUpperCase())
//     }
//   }
//   return result
// }
// const people = [
//   { name: 'Alice', age: 16 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 17 },
//   { name: 'David', age: 25 },
// ];
// console.log(names(people))


// const uniques = (arr) =>{
//   return [...new Set(arr.flat(2).sort((a,b) => a - b ))]
// }
// console.log(uniques([1, [2, 3], 4, [2, [5, 1]]]))


// const extractWordsAndNumbers = arr =>
//   arr.flatMap(str => {
//     const letters = str.split('').filter(c => isNaN(c) || c === ' ').join('');
//     const numbers = Number(str.split('').filter(c => !isNaN(c)).join(''));
//     return letters ? [letters, numbers] : [numbers];
//   });
// const input = ["Hello123", "World456", "49", "Another789"];
// const output = extractWordsAndNumbers(input);
// console.log(output);


// function* fibonacciGenerator(limit) {
//   let a = 0, b = 1;
//   while (a <= limit) {
//     yield a;
//     let temp = a;
//     a = b;
//     b = temp + b;
//   }
// }
// console.log([... fibonacciGenerator(20)])


// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   getDetails() {
//     return `${this.name} costs $${this.price.toFixed(2)}`;
//   }
//   applyDiscount(discount) {
//     const discountedPrice = this.price * (1 - discount / 100);
//     this.price = discountedPrice;
//     return discountedPrice;
//   }
// }
// const prod = new Product("Laptop", 1000);
// console.log(prod.getDetails());  
// console.log(prod.applyDiscount(10)); 
// console.log(prod.getDetails());      

