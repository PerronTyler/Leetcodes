/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/
Input: nums1 = [2, 7, 11, 15], target1 = 9
Output: [0, 1]

Input: nums2 = [3, 2, 4], target2 = 6
Output: [1, 2]

Input: nums3 = [3, 3], target3 = 6
Output: [0, 1]


var twoSum = function (nums, target) {
    let output = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push(i, j)
                break
            }
        }
    }
    return output
};

// MAGIC SOLUTION

function twoSum(nums, target) {
    const map = {}
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        const complement = target - element
        if (map[complement] !== undefined) {
            return [map[complement], index]
        } else {
            map[element] = index
        }
    }
    return []
}



console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));