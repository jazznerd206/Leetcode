var test1 = '25';
var test2 = '125';
function addStrings(num1, num2) {
    if (num1.length < num2.length){
        let numHolder = num2;
        num2 = num1;
        num1 = numHolder;
    }
    let index1 = num1.length - 1;
    let index2 = num2.length - 1;
    let remainder = 0;
    let total = '';
    let result = '';
    while (index1 >= 0) {
        const one = num1.charAt(index1)*1;
        const two = num2.charAt(index2)*1 > 0 ? num2.charAt(index2)*1 : 0;
        total = remainder + one + two;
        remainder = 0;
        if (total > 9) {
            (total %= 10);
            remainder = 1;
        }
        index1--;
        index2--;
        result = `${total.toString()}${result}`;
    }
    if (remainder > 0) {
        result = `${remainder.toString()}${result}`;
    }
    console.log(result);
    return result
};
addStrings(test1, test2);
