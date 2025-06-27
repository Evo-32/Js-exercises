function add(s){
let a = parseInt(s,10);
let operation = s.indexOf('+');
let afterPlus = s.substr(operation + 1);
let b = parseInt(afterPlus , 10);
return a + b;
}

add("102+17");