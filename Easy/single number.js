/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

Input: nums1 = [2, 2, 1]
Output: 1

Input: nums2 = [4, 1, 2, 1, 2]
Output: 4
nums3 = [4, 1, 2, 1, 2, 4, 7, 12,173,173,12,9,7]
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let uniqNum = 0;
    for (let idx = 0; idx < nums.length; idx++) {

        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;
};
console.log(singleNumber(nums2));
console.log(singleNumber(nums1));
console.log(singleNumber(nums3));