/*-------- using Set--------*/
const arrayWithDuplicates =[1,2,2,3,4,4,5,5,6];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray);

/*-------- using array.from() and Set--------*/
const noDuplicate = Array.from(new Set(arrayWithDuplicates));
console.log(noDuplicate);

/*-------- using for,if push() and includes()--------*/

const noDouble = [];
for (var i=0; i<arrayWithDuplicates.length;i++){
    if(!noDouble.includes(arrayWithDuplicates[i])){
            noDouble.push(arrayWithDuplicates[i]);
    }
}
console.log(noDouble);

/*-------- using filter and indexOf--------*/

const uniqueArr = arrayWithDuplicates.filter((item,index,self)=>{
    return self.indexOf(item) === index;
});
console.log(uniqueArr);

/*-------- remove duplicate ids in the object using map(),array.from(),--------*/

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }, // Duplicate ID
  { id: 3, name: "Charlie" },
];

const uniqueUsers = Array.from(new Map(users.map(user => [user.id, user])).values());
console.log(uniqueUsers);