function findNthOccurence(a,n){
    var count = 0;
    for(var i=0; i<a.length; i++){
        if (a[i] == n){
            count += 1;
        }
    }
    return count;
}

console.log(findNthOccurence("hello hello hello", "l"));