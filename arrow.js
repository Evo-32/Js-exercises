// function sum(a, b) {
//   return a + b;
// }

// let sum2 = (a, b) => {
//   return a + b;
// };

// function isPositive(number) {
//   return number >= 0;
// }

// let isPositive2 = (number) => number >= 0;

// function randomNumber() {
//   return Math.random;
// }

// let randomNumber = () => Math.random;

// document.addEventListener("click", function () {
//   console.log("click");
// });

// document.addEventListener("click", () => console.log("click"));




class Person {
  constructor(name) {
    this.name = name
  }

  printNameArrow() {
    setTimeout(() => { 
      console.log("Arrow: " + this.name);
    }, 100)
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("function: " + this.name);
    }, 100);
  }
}

let p1 = new Person('peter')
p1.printNameArrow()
p1.printNameFunction()


/*--- example ---*/
const person = {
  name: "Alice",
  regularFunc: function() {
    console.log(this.name); // 'Alice' because called on person
  },
  arrowFunc: () => {
    console.log(this.name); // undefined or window/global, because arrow takes 'this' from outside object
  }
};

person.regularFunc(); // Alice
person.arrowFunc();   // undefined (borrows 'this' from surrounding, not 'person')

/*--- this inherited ---*/
const person = {
  name: "Alice",
  hobbies: ["reading", "cycling"],
  
  printHobbiesRegular: function() {
    this.hobbies.forEach(function(hobby) { // function in another means it won't 
      console.log(this.name + " likes " + hobby);
    });
  },

  printHobbiesArrow: function() {
    this.hobbies.forEach((hobby) => {
      console.log(this.name + " likes " + hobby);
    });
  }
};

person.printHobbiesRegular();
// Output:
// undefined likes reading
// undefined likes cycling
// ❌ Why? The regular function inside forEach has its own 'this' (global or undefined in strict mode)

person.printHobbiesArrow();
// Output:
// Alice likes reading
// Alice likes cycling
// ✅ Why? Arrow function borrows 'this' from printHobbiesArrow, which is person
