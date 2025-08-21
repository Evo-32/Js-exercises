class Car{
    constructor(make,model,year = 2023){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        console.log(`${this.make} ${this.model}, ${this.year}`)
    }
    updateYear(newYear){
        this.year = newYear;
    }
}

class ElectricCar extends Car{
    constructor(make,model,year= 2023,batteryLevel){
        super(make,model,year)
        this.batteryLevel = batteryLevel;
    }
    charge(){
        this.batteryLevel = 100;
        console.log(`batteryLevel is ${this.batteryLevel}.`)
    }
}


 let car1 = new Car('Toyota','Corolla');
 car1.getInfo()
 car1.updateYear(2012)
 let car2 = new ElectricCar('Toyota','Corolla',2025,75)
 car2.charge()
 