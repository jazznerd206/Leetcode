/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    if (str1.length !== str2.length) return false;
    const map1 = {};
    for (i = 0; i < str1.length; i++) {
        let letter = str1[i];
        map1[letter] ? map1[letter] += 1 : map1[letter] = 1;
    }
    for (i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!map1[letter]) return false
        else map1[letter] -= 1;
    }
    return true;
};