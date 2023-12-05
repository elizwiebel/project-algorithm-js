/*
    121. Best Time to Buy and Sell Stock
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
    Easy
    20 mins
    Array
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minBuyPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        console.log("i:", i);
        const currentPrice = prices[i];
        const currentProfit = currentPrice - minBuyPrice;

        console.log("   currentPrice:", currentPrice);
        console.log("   minBuyPrice:", minBuyPrice);
        console.log("   currentProfit:", currentProfit);
        console.log("   maxProfit:", maxProfit);

        if (currentProfit > maxProfit) maxProfit = currentProfit;
        if (currentPrice < minBuyPrice) minBuyPrice = currentPrice;
    }

    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));