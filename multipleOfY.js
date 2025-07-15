function multipleOfY(x,y){
    var result =0;
    if(y === 0 ) throw new Error("y must not be 0");
    var r = x%y;
    return r === 0 ? x : x + (y - r);
}

 console.log(multipleOfY(43,3));