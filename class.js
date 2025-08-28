// class Product{
//     constructor(name,price){
//         this.name = name
//         this.price = price
//     }

//     displayProduct(){
//         console.log(`product: ${this.name}`)
//         console.log(`price: $${this.price}`)
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price*salesTax);
//     }
// }

// const salesTax = 0.05;

// const prod1 = new Product('shirt',11.81)
// const prod2 = new Product('pant',29.69)
// const prod3 = new Product('shoes',17.5)

// prod2.displayProduct()
// const total = prod2.calculateTotal(salesTax);
// console.log(`total price(with tax): $${total.toFixed(2)} `)








class User{
    constructor(firstname,lastname,credit){
        this.firstname = firstname;
        this.lastname = lastname
        this.credit = credit;
    }

    getFullName(){
        console.log(`My name is  ${this.firstname}.slice(0).toUpperCase()${this.firstname}.slice(1).toLowercase ${this.lastname}`)
    }
}

const john = new User('john', 'anderson',34);
john.getFullName();
