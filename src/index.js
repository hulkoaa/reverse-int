module.exports = function reverse (n) {
    let arr = [];
    let str = n.toString();
    for(i=0;i<str.length;i++){
        if(str[i]!='-'){arr.push(str[i]);}
    }
    return arr.reverse().join('');


  
}
