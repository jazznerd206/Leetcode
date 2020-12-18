// Given an array of characters, return
// 

const input = ["h","e","l","l","o"]

const reverseString = array => {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        let holder = array[end];
        array[end] = array[start]
        array[start] = holder;
        start++;
        end--;
    }
    return array;
}

console.log(reverseString(input))
// output = ["o","l","l","e","h"]