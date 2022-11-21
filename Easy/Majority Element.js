/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/


// Example 1:

Input: nums = [3, 2, 3]
Output: 3

// Example 2:

Input: nums = [2, 2, 1, 1, 1, 2, 2]
Output: 2





/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let freq = {}
    for (i = 0; i < nums.length; i++) {
        if (freq[nums[i]] == undefined) {
            freq[nums[i]] = 1
        }
        else {
            freq[nums[i]] += 1
        }
        if (freq[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }
};
var majorityElement = function (nums) {
    const map = new Map();
    const length = nums.length;
    let max;
    let maxIndex = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
        if (map.get(nums[i]) > maxIndex) {
            maxIndex = map.get(nums[i])
            max = nums[i];
        }
    }
    return max;
}