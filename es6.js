// let age = 25;
// age = 30;
// console.log(age);

// const name = 'Alice';
// const city = 'paris';
// console.log(`Hello, my name is ${name} and i live in ${city}`)

// add = (a,b) =>  a+b;
// console.log(add(1,2))

// function greet(name='Guest'){
//     console.log(`Hello ${name}`)
// }
// greet('Bob');
// greet()

// const colors = ['red','green','blue'];
// const [color1,color2] = colors
// console.log(color1)
// console.log(color2)

// const book = {
//     title : '1984',
//     author : 'orwell',
//     year : 1949
// }
// const {title : topic,year: period} = book
// console.log(topic,period);

// const arr1 = [1,2];
// const arr2 = [3,4];
// const merged = [...arr1,...arr2]
// console.log(merged)

// function sum(...nums){
//     let total = 0;
//     for(let num of nums){
//         total += num;
//     }
//     return total
// }
// console.log(sum(1,2,3,4))

// import {add} from './math.js'
// import {multiply} from './math.js'

// console.log(add(1,2))
// console.log(multiply(1,2))

// class Car{
//     constructor(make,year){
//         this.make = make,
//         this.year = year
//     }
//     static age(year){
//        const currentYear = new Date().getFullYear();
//        return currentYear - year;
//     }
// }
// const c1 = new Car('Range Rover', 2000)
// console.log(`My car is ${Car.age(c1.year)} old.`)

// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     speak(){
//         console.log(`${this.name} is making noise`)
//     }
// }
// const dog = new Animal('Dog')
// dog.speak()
// class Cow extends Animal{
//     constructor(name){
//         super(name);
//     }
//     speak(){
//         console.log(`${this.name} mooows`)
//     }
// }
// const myCow = new Cow('cow')
// myCow.speak()

// class Rectangle{
//     constructor(width,length){
//         this.width = width
//         this.length = length
//     }
//     get area(){
//         return this.length *this.width
//     }
//     set value(width){
//         this.width = width
//     }
// }
// const rect = new Rectangle(2,3)
// console.log(rect.area)
// rect.value = 5
// console.log(rect.area)

// class   Person{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
//     sayHello(){
//         console.log(`Hello, my name is ${this.name}.`)
//     }
//     static info(){
//         console.log(`This is a person class`)
//     }
// }
// const p1= new Person('john',16)
// p1.sayHello()
// Person.info()

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }
//   static withdraw(account, amount) {
//     if (amount < 0) {
//       throw new Error("The amount must be positive");
//     }

//     if (account.balance <= 0 || account.balance < amount) {
//       throw new Error(`Unsufficient funds balance is ${account.balance}`);
//     }
//     account.balance -= amount;
//     console.log(`Withdrawal successful new balance is ${account.balance}`);
//   }

//   static getBalance(account) {
//     console.log(`The current balance is ${account.balance}`);
//   }
// }
// let draw = new BankAccount(20000);
// try {
//   BankAccount.withdraw(draw, 3000);
//   BankAccount.withdraw(draw, -2000);
//   BankAccount.withdraw(draw, 50000);
// } catch (error) {
//   console.log("Error:", error.message);
// }

// class Wallet{
//     #balance;
//     #pinCode;
//     constructor(initialbalance,pincode){
//         this.#balance = initialbalance,
//         this.#pinCode = pincode
//     }
//     #validatePin(pin){
//         return pin === this.#pinCode
//     }
//     checkBalance(pin){
//         if(this.#validatePin(pin)){
//             return `Current balance is ${this.#balance}`
//         }else{
//             return `Acess denied : Incorrect pin`
//         }
//     }
// }
// let wallet  = new Wallet(5000,'321')
// console.log(wallet.checkBalance('002'))
// console.log(wallet.checkBalance('321'))

// function* countUpTo(limit) {
//   for (let i = 1; i <= limit; i++) {
//     yield i;
//   }
// }
// for(const num of countUpTo(10)){
//     console.log(num)
// }

// function* alphabetGenerator(arr){
//     for(let chr of arr){
//         yield(chr);
//     }
// }
// function* combinedGenerator(){
//     yield*(alphabetGenerator(['a','b','c']))
//     yield(1)
//     yield(2)
//     yield(3)
// }
// for(let values of combinedGenerator()){
//     console.log(values)
// }

// class CountDown{
//     constructor(start){
//         this.start = start
//     }
//     [Symbol.iterator](){
//         let current = this.start

//         return {
//             next(){
//                 if(current >= 0){
//                     return{value: current--, done:false};
//                 }else{
//                     return {done: true};
//                 }
//             }
//         }
//     }
// }
// const countdown = new CountDown(5);
// for (const num of countdown) {
//   console.log(num);
// }

// let id = Symbol('ID')
// const Car={
//     brand: 'Range rover',
//     model: 'xxx',
//     [id]: 123
// }
// console.log(Car)
// console.log(Car[id])
// const symbols= (Object.getOwnPropertySymbols(Car))
// console.log(Car[symbols[0]])

// const ap = Symbol.for('app.secret')
// const app = Symbol.for('app.secret')
// console.log(ap ===  app)

// class Range{
//     constructor(from,to){
//         this.from = from,
//         this.to = to
//     }
//     [Symbol.iterator](){
//         let start = this.from;
//         let end = this.to;
//         return{
//             next(){
//                 if(start<= end){
//                     return {value:start++, done:false}
//                 }else{
//                     return {done:true}
//                 }
//             }
//         }
//     }
// }
// const range = new Range(5,9);
// for(let num of range){
//     console.log(num)
// }

// function getUniqueNumbers(arr){
//     return [...new Set(arr)]
// }
// console.log(getUniqueNumbers([1,2,2,3,4,4,5]));

// const userRoles = new Map()
// userRoles.set(1,'author')
// userRoles.set(2,'singer')
// userRoles.set(3,'instructor')
// console.log(userRoles.get(1))
// console.log(userRoles.has(3))
// console.log(userRoles.has(5))
// for(let [id,role] of userRoles){
//     console.log(`user ${id} has ${role}`)
// }



// function getMinMax(numbers){
//     let minMax = [Math.min(...numbers),Math.max(...numbers)]
//     return minMax
// }
// const [min,max] = getMinMax([2,3,4,1,5,9,4,5])
// console.log(min)
// console.log(max)


