// const user = {
//     username : 'guest',
//     age : 18
// }

// const handler = {

//     get(obj,prop){
//         console.log(`accessing property: ${prop}`)
//         return obj[prop]
//     },

//     set(obj,prop,value){
//         if(prop === 'username'){
//             if(typeof value !== 'string' || value.trim() === ''){
//                 console.log('the username must not be empty')
//                 return false;
//             }
//         }
//         if(prop === 'age'){
//             if(value < 18){
//                 console.log('the age must be equal or greater than 18')
//                 return false;
//             }
//         }
//         return Reflect.set(obj,prop,value);
//     },
// }

// const proxyUser = new Proxy(user,handler)
//  proxyUser.username = 'newuser'
// proxyUser.age = 25
// proxyUser.username = ''
// proxyUser.age = 16
// proxyUser.username = null


const config = {
    appname : 'esound',
    version: '1.0.0',
    debug: true
}

const handler ={
    set(obj,prop,value){
        console.log('cannot modify read only property')
            return false
    },
     deleteProperty(obj,prop){
        console.log('cananot delete property')
        return false
    }
}

const proxyConfig = new Proxy(config,handler)

console.log(proxyConfig.appname)
delete proxyConfig.debug
proxyConfig.version = "2.0.0"

