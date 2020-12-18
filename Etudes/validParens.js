const string = "()[]{}";
const string2 = "([";
const string3 = "()";

const validParens = (s) => {
    let punc = new Map();
    punc.set('(', ')');
    punc.set('{', '}');
    punc.set('[', ']');
    let holder =  [];
    for (i = 0; i < s.length; i++) {
        if(punc.has(s[i])){
            holder.push(s[i])
        } else if (s[i] !== punc.get(holder.pop())) {
            return false
        }
    }
    return holder.length === 0;
}

validParens(string);


            // console.log(` after ${s}`);
            // console.log('ternary bool' + s.length > 0 ? false : true);


            // const value = punc.get(s[i]);
            // console.log('i and value ' + s[i], value)
            // holder.push(s[i], value);
            // removeByIndex(s, i);
            // removeByIndex(s, s.indexOf(value));

            // validParens(s);



    // let punc = new Map();
    // punc.set('(', ')');
    // punc.set('{', '}');
    // punc.set('[', ']');

 // console.log(holder);
    
    // console.log(`${s}`);
    // if (s.length === 0) {
    //     console.log(true);
    //     return true;
    // } else {
    //     console.log(`length not zero -- ${s} -- ${s.length}`);
    //     return false;
    // }

    // if (s.length === 0) {
        // console.log(true);
        // return true;
    // } else {
        // console.log(false);
        // return false;
    // }

    
    // const map = {
    //     '(': ')',
    //     '{': '}',
    //     '[': ']'
    // }
    // for(let i of s){
        // if(map[i]){
            // holder.push(i);
        // } else if (i !== map[holder.pop()]) {
            // return false
        // }
    // 
    // console.log(holder.length === 0 ? true : false);
        // console.log(map)