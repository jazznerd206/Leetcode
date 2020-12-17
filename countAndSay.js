// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

const num = 7;

const countAndSay = n => {
    if (n === 1) return "1";
    const prevIteration = countAndSay(n - 1);
    let str = "";
    for (i = 0; i < prevIteration.length; i++) {
        let count = 1;
        while (i < prevIteration.length - 1 && prevIteration[i] === prevIteration[i + 1]) {
            count++;
            i++;
          }
        const appendage = count + prevIteration[i].toString();
        str = str.concat(appendage);
    
    }
    return str
}

console.log(countAndSay(num))