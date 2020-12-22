const string ='string';

function reverseES6Loop(str){
    let reversed = "";
    for(let char of str){
        console.log(reversed)
        reversed = char + reversed;
    }
    return reversed;
}

function reverseWhile(str){
    let i = str.length;
    let o = '';
    while ( i > 0 ) {
        o += str.substring(i - 1, i);
        i--;
    }
    return o;
}

function reverseRecursive(str){
    return str ? reverse(str.substr(1)) + str[0] : str
}

function reverseReducer(str){
    return str.split("").reduce((rev, char)=> char + rev, ''); 
  }

function reverseSpreadOp(str){
    return [...str].reverse().join('');
}

function reverseSplit(str){
    return str.split("").reverse().join("");
}

console.log(reverseWhile(string))