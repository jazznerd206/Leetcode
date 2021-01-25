const fibonacci = n =>
    [...Array(n)].reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []
    )
const fibonacci2 = n => {  
    let arr = []; 
    let obj = {};
    let i = 0;
    while (i < n) {
        if (i > 1) {
            obj[i] = obj[i-1] + obj[i-2];
            i++;
        } else {
            obj[i] = i;
            i++;
        }
    }
    for (let key in obj) {
        arr.push(obj[key])
    }
    return arr;
}
let time1 = Date.now()
console.log(fibonacci(7));
let time2 = Date.now()
console.log((time2 - time1) / 1000 + ' seconds')