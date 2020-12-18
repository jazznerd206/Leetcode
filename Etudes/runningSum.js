const array = [1,2,3,4]
var runningSum = function(nums) {
    let num = 0;
    let results = []
    for (let i in nums) {
        let result = nums[i] + num;
        results.push(result);
        num = result;
    }
    return results
};
runningSum(array);