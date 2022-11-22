/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


 */
Input: nums1 = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Input: nums2 = [0,0,1]
Output: [0]

var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums[i])
            nums.splice(i,1)
        }
        console.log(nums);
    }
    return nums
};


var moveZeroes2 = function (nums) {
    let pointer1 = 0
    let pointer2 = 1
    
    while (pointer2 < nums.length){
        if (nums[pointer1] === 0) {
            if (nums[pointer2] !== 0 && nums[pointer2] !== 'undefined') {
                ([nums[pointer2], nums[pointer1]] = [nums[pointer1], nums[pointer2]])
            } else if (nums[pointer2] === 0) {
                pointer2++
                if (!nums[pointer2]) {
                    return nums
                }else if (nums[pointer2] !== 0) {
                    ([nums[pointer2], nums[pointer1]] = [nums[pointer1], nums[pointer2]])
                }
            }
            console.log(nums);
        }
        pointer1++
        pointer2 = pointer1 +1
    }
    return nums
};
console.log(moveZeroes(nums2));