/**
 * @param {number[]} nums
 * @return {number[]}
 */
function mergetwo(arr1, arr2) {
    let returnArr = []
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] >= arr1[i]) {
            returnArr.push(arr1[i]);
            i++;
        } else {
            returnArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        returnArr.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        returnArr.push(arr2[j])
        j++;
    }
    return returnArr;
}
var sortArray = function(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sortArray(arr.slice(0, mid));
    let right = sortArray(arr.slice(mid));
    return mergetwo(left, right)
};