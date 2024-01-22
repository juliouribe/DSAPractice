function maxProfit(prices: number[]): number {
    /*
        Track the max profit and min price. Whenever we find a new min/max
        reassign the value. Calculate profit each day.
    */
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const curr = prices[i];
        const profit = curr - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        if (minPrice > curr) {
            minPrice = curr;
        }
    }
    return maxProfit;
};
