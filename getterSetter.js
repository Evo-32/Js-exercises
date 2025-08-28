class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  set radius(value) {
    if (value > 0) {
      this._radius = value; // Use a different property name to avoid infinite loop
    } else {
      console.error("Radius must be a positive number.");
    }
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area); // Getter is called: 78.539...
myCircle.radius = 10; // Setter is called
console.log(myCircle.area); // Getter is called: 314.159...