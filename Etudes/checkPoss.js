const array = [4,2,3]
const array1 = [4,3,2]
const array2 = [1,1,2,2]
const array3 = [3,4,2,3]
const array4 = [5,7,1,8]

const checkPoss = nums => {
    let decreaseCheck = 0;
    for (i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            decreaseCheck++;
            if (decreaseCheck > 1) {
                return false;
            }
            const left = i > 1 ? nums[i - 2] : 0;
            if (left > nums[i]) {
                nums[i] = nums[i - 1];
            } else {
                nums[i - 1] = left;
            }
        }
    }
    return true;
}
// checkPoss(array4)
console.log(checkPoss(array3));
console.log(checkPoss(array4));