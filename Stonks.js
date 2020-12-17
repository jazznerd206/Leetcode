const pricesArray = [7,1,5,3,6,4];
const pricesArray1 = [7,6,4,3,1];
const pricesArray2 = [2,4,1]

// For a given array of prices where price[i] is the price
// on a given day i:
//
// return the max profit that can be achieved
// via the purchase and sale of one share.
//
// TEST
// prices = [2,4,1]
// output = 2
// explanation: purchase the first day for a price of 2
// then sell the second day for a price of 4, profit of 2.

var maxProfit = function(prices) {
    let holder = 0;
    let lowVal = prices[0];
    for (let i = 1; i < prices.length; i++) {
        lowVal = Math.min(prices[i], lowVal);
        holder = Math.max(holder, prices[i] - lowVal);
        return Math.max(holder, prices[i] - lowVal);
    }
};

console.log(maxProfit(pricesArray));

