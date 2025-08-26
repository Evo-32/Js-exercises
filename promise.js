// let p = new Promise((resolve,reject) => {
//     let a = 1 + 2
//     if(a == 2){
//         resolve('success')
//     }else{
//         reject('failed')
//     }
// })
// p.then((message)=>{
//     console.log('this is in  then ' + message)
// }).catch((message) => {
//     console.log('this is in  catch ' + message)
// })

// let Greeting = new Promise((resolve,reject) => {
//     setTimeout((){
//         resolve('Hello,  world!')
//     },2000)
// })
// Greeting.then((message) => {
//     console.log(message)
// })

// let result = new Promise((resolve,reject)=>{
//     let success = false  // math.random gives number btn 0 adn 1  Math.random() * 0.5
//     if(success){
//         resolve('Success!');
//     }else{
//         reject('Failure!')
//     }
// })
// result.then((message) => {
//     console.log(message)
// }).catch((message)=>{
//     console.log(message)
// })

// let user = {
//     name: 'bella',
//     age: 25
// }
// const handler = {
//     get(target,property){
//         console.log(`property ${property} has beeen read`) ;
//         return target[property];
//     }
// }

// const proxyUser = new Proxy(user,handler)

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("you walked the dog");
      } else {
        reject("you didn't walk the dog");
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dishesCleaned = true;
      if (dishesCleaned) {
        resolve("you cleaned the dishes");
      } else {
        reject("you didn't clean the dishes");
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tookTrash = true;
      if (tookTrash) {
        resolve("you took the trash");
      } else {
        reject("you didn't take the trash");
      }
    }, 2500);
  });
}

walkDog().then(value => { console.log(value); return cleanKitchen()})
         .then(value => { console.log(value);return takeOutTrash()})
         .then(value => {console.log(value);console.log("you finished all the chores")})
         .catch(error => console.error(error));
