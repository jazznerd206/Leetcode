const arr = [1,1,2,2,3,3,4]

const singleNumber = nums => {
    nums.sort((a,b)=>a-b);
    for (i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i+1]){
            console.log(nums[i])
            return nums[i];
        }
        i++;
    }
}
singleNumber(arr);