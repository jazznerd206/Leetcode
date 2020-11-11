const s = "A man, a plan, a canal: Panama";
const secondString = "race a car";

const isValidPalindrome = (string) => {
    if (string === '') {
        return true
    }
    const s = string.replace(/[^0-9a-zA-Z]+/gmi, '')
    const cleanS = s.toLowerCase();
    let left = 0;
    let right = cleanS.length - 1;
    while(left < right) {
        if(cleanS.charAt(left) !== cleanS.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true
}
isValidPalindrome(s);
isValidPalindrome(secondString);