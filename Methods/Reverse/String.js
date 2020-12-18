function reverseModernLoop(str){
    let reversed = "";
    for(let char of str){
        console.log(reversed)
        reversed = char + reversed;
    }
    return reversed;
  }

function reverseRecursive(str){
    return str ? reverse(str.substr(1)) + str[0] : str
}