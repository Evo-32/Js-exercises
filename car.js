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

    set year(value){
        if(value < 1885) throw 'Year not valid'
        this._year = value;
    }

    get year(){
        return this._year;
    }

    get age(){ 
        return new Date().getFullYear() - this.year;
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
 console.log(car1.age)
 let car2 = new ElectricCar('Toyota','Corolla',2000,75)
 car2.charge()
console.log(car2.age)
 