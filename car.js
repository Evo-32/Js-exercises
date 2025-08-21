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
 let car1 = new Car('Toyota','Corolla');
 car1.getInfo()
//  car1.updateYear(2012)
