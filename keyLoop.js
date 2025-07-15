/*----- iterate through object using keys -----*/

const car = {
  make: "Ford",
  model: "Mustang",
  year: 1969
};

const keys = Object.keys(car);
console.log(keys); // Output: ["make", "model", "year"]

// Looping through keys
keys.forEach(key => {
  console.log(key + ": " + car[key]);
});


/*----- iterate through object using values-----*/

const scores = {
  math: 95,
  science: 88,
  history: 72
};

const values = Object.values(scores);
console.log(values); // Output: [95, 88, 72]

// Calculating sum of values
const totalScore = values.reduce((sum, score) => sum + score, 0);
console.log(totalScore); // Output: 255