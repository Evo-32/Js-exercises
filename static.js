class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); //  5  you call the static keyword on the class not the object

let obj = new MathUtils();
// console.log(obj.add(2, 3));  Error: obj.add is not a function

/*-- on the static properties---*/

class Counter {
  static count = 0;

  static increment() {
    this.count++;
    return this.count;
  }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2



