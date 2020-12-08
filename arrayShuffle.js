const array = [1,2,3,4,5,6]
const pos = 3;

var shuffle = function(nums, n) {
    const firstHalf = nums.splice(0, [n]);
    const secondHalf = nums.splice(nums[n]);
    const newArray = [];
    for (let i in firstHalf) {
        newArray.push(firstHalf[i], secondHalf[i]);
    }
    return newArray;
};

shuffle(array, pos)