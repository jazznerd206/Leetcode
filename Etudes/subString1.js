/**
 * @param {string} s
 * @return {number}
 */

// MULTIPLE POINTERS
// initialize max holder
// initialize counter
// start one at the front, i
// start a second at front + 1, j
// while j !== i, increment second marker
// if they the same, set max holder to j - i, increment first marker
// return math.max(max holder, counter)

// const string = 'cabbcbhhaea'
// const string = 'scayofdzca'
const string = "aa";
// const string = "csdfg"

var maxLengthBetweenEqualCharacters = function(s) {
    // if (s.length < 2 || s.charAt(0) === s.charAt(1)) return 0;
    let max = -1;
    for (i = 0; i < s.length; i++) {
        let first = i;
        let second = s.length - 1;
        // console.log(s[i], max)
        while (first < second) {
            // console.log(s[first], s[second])
            if (s[first] !== s[second]) {
                second -= 1;
            }
            else if (s[first] === s[second]) {
                max = Math.max(max, ((second - first) - 1));
                first++;
                second = s.length - 1;
            };
        }
    }
    return max;
};

console.log(maxLengthBetweenEqualCharacters(string))