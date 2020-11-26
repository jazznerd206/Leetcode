const pricesArray = [7,1,5,3,6,4];
const pricesArray1 = [7,6,4,3,1];
const pricesArray2 = [2,4,1]

var maxProfit = function(prices) {
    let holder = 0;
    let lowVal = prices[0];
    for (let i = 1; i < prices.length; i++) {
        lowVal = Math.min(prices[i], lowVal);
        holder = Math.max(holder, prices[i] - lowVal);
        return Math.max(holder, prices[i] - lowVal);
    }
};
maxProfit(pricesArray2);