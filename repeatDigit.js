function repdigit(num){
let x = num % 10;
let y = Math.floor(num / 10);
if (x === y){
return "Repdigit!";
}
return "No Repdigit!";
}

console.log(repdigit(11));

