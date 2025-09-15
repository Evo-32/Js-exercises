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


const names = (arr) =>{
  let result = []
  for(const {name,age} of arr){
    if(age > 18){
       result.push(name.toUpperCase())
    }
  }
  return result
}
const people = [
  { name: 'Alice', age: 16 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 17 },
  { name: 'David', age: 25 },
];
console.log(names(people))