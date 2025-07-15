function capitalizeOdd(str){
    const newWord = [];
     for( var i=0; i<str.length; i++){
        if(i%2 === 1){
         newWord.push(str[i].toUpperCase());
        }else{
            newWord.push(str[i]);
        }
     }
     return newWord.join('');
}

console.log(capitalizeOdd("Javascript"));