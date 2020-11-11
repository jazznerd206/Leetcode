const strs = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length === 0 || strs === null) {
        return '';
    }
    // strs = strs.sort();
    // find shortest member of array
    const min = strs.reduce((a, b) => {return a.length <= b.length ? a : b;})
    // sort array alphabetically
    console.log(strs.indexOf(min))
    console.log(strs);
    strs = strs.splice(strs.indexOf(min), 2)
    console.log(strs);
    for (i = 0; i < min.length; i++) {
        // loop through shortest word to find each letter
        const char = min[i];
        // loop through next words in the array to match letters from first word
        for (j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                console.log(prefix);
            }
        }
        prefix = prefix + char;
    }
    return prefix
};
longestCommonPrefix(strs);