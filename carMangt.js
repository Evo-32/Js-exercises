class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.id = Date.now();
    }
}

const carInventory = new Map();
const availableMakes = new Set();

const addCar = (car) => {
    carInventory.set(car.id, car);
    availableMakes.add(car.make);
    const { make, model } = car;
    console.log(`Added ${make} ${model} to the inventory`);
};

const displayCars = () => {
    console.log('Current Car Inventory:');
    for (const [id, car] of carInventory) {
        const { make, model, year } = car;
        console.log(`Car ${id} made by ${make} of model ${model} made in ${year}`);
    }
};

const findCarById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const car = carInventory.get(id);
            if (car) resolve(car);
            else reject(new Error(`Car with id ${id} is not found`));
        }, 1000);
    });
};

const searchAndDisplay = (id) => {
    findCarById(id)
        .then(car => console.log(`Found Car: ${car.make} ${car.model}, Year: ${car.year}`))
        .catch(error => console.log(error.message));
};

const updateCar = (carId, newYear) => {
    const originalCar = carInventory.get(carId);
    if (originalCar) {
        const updatedCar = { ...originalCar, year: newYear };
        carInventory.set(carId, updatedCar);
        console.log(`\nUpdated year for Car ID ${carId} to ${newYear}.`);
    } else {
        console.log(`\nCar with ID ${carId} not found.`);
    }
};


const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2019);

addCar(car1);
addCar(car2);
displayCars();

updateCar(car1.id, 2022);

searchAndDisplay(car2.id);
