/*
@param {number} n
@return {number}

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
Input: n = 2
Output: 2

Input: n = 3
Output: 3

var climbStairs = function (n) {
    let noOfWays = [1, 2]

    for(let i = 2; i < n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }

    return noOfWays[n - 1]
};