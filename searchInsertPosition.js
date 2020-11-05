const nums = [1,3,5,6];
const target = 5;

const nums2 = [1];
const target2 = 0;

const nums3 = [1,3,5,6];
const target3 = 7;

const nums4 = [1,3,5,6];
const target4 = 2;

const searchInsertPosition = (array, value) => {
    for(i = 0; i < array.length; i++) {
        if (value === 0) {
            console.log('target zero returns as first member of ordered array.')
            return 0
        } else if(nums[i] > value) {
            console.log('if value is less than a member that is in the array, return the index of that member')
            console.log(array.indexOf(nums[i]));
            return array.indexOf(nums[i]);
        } else if (value === nums[i]) {
            console.log('if value is equal to nums[i], return the index position of nums[i]')
            console.log(array.indexOf(value))
            return array.indexOf(value);
        } else if (array.indexOf(nums[i]) === array.length - 1 && value > nums[i]) {
            console.log('if value is greater than all members of array, return array.length')
            console.log(array.length);
            return array.length;
        }
    }
}

searchInsertPosition(nums, target);
searchInsertPosition(nums2, target2);
searchInsertPosition(nums3, target3);
searchInsertPosition(nums4, target4);