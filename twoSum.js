var reverse = function(x) {
    let numString = Math.abs(x).toString();
    console.log(numString)
    const absNum = parseInt(numString.split("").reverse().join(""));
    console.log(absNum);
    if (x > Math.pow(2,31) - 1) {
        return 0;
    }
    return x < 0 ? -absNum : absNum;
};

console.log(reverse(1534236469))