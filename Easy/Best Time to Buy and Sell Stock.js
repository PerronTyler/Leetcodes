/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let tempProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                if ((prices[j] - prices[i]) > tempProfit) {
                    tempProfit = prices[j] - prices[i]
                }
            }
        }
    }
    return tempProfit
};

const maxProfits = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]; // our current profit

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
};

console.log(maxProfits(prices));