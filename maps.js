// const myArray = [1,2,3,4,5];
// const mySet = new Set(myArray);

// console.log(myArray);
// console.log(mySet)

// const uniqueArray = [...mySet]
// console.log(uniqueArray)

// mySet.add('6')
// mySet .add({
//     book : 'Es6 intro'
// })
// mySet.add([1,2,3]);
// mySet.delete(3)
// mySet.clear();
// console.log(mySet)
// console.log(mySet.has(6))
// console.log(mySet.size)

/*---map---*/
function topFive(paragraph) {
const words = paragraph.replace(/[.,]/g,'').toLowerCase().split(' ');

const wordMap = new Map();
words.forEach(word=>{
    wordMap.set(word,(wordMap.get(word) || 0) +1) 
});
const topWords = [...wordMap.entries()].sort((a,b)=> b[1] - a[1]).slice(0,5).map(entry => entry[0])
console.log(topWords);
}


console.log(
  topFive(
    "Once upon a time, in a faraway kingdom, a young princess dreamed of exploring the enchanted forest. Magical creatures whispered secrets among the trees, and sparkling rivers sang melodies of old. Every day, the princess imagined adventures beyond the castle walls, meeting talking animals and finding hidden treasures. One night, under the silver moon, she discovered a mysterious path that promised a journey she would never forget."
  )
);
