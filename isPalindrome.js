const int = -121;
const int2 = 12321;

const isPalindrome = number => {
    if (Math.sign(number) === -1) {
        console.log(false)
        return false;
    }

    const reverseNumber = number => {
        var revNumber = 0;
        while (number > 0) {
          revNumber = (revNumber * 10) + (number % 10);
          number = Math.floor(number / 10);
        }
        return revNumber;
    }
    console.log(number === reverseNumber(number));
    return number === reverseNumber(number);
}
// isPalindrome(int2);

const test = "A Santa Lived As A Devil At Nasa"
const isPal = str => {
    return str.toLowerCase().replace(/\s/g, '') === str.toLowerCase().replace(/\s/g, '').split('').reverse().join('');
}
isPal(test)