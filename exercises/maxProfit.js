var maxProfitV1 = function (prices) {
  // array is not sorted. prices are ints
  // we can find the cheapest price and look at the values after that index
  // we can do sliding window and see what the largest profit is per
  // price and return the idx with the largest gain.
  // we need to return maximum profit or 0 if no profit

  // iterate over prices using two pointers
  // current price and everything afterwards
  // might be a chance to use a memo or figure out the max price or min price
  // so we can quit earlier
  largestProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const current = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - current;
      if (profit > largestProfit) {
        largestProfit = profit;
      }
    }
  }
  return largestProfit
};

var maxProfit = function (prices) {
  largestProfit = 0;
  minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // right side
    const current = prices[i];
    // calculate profit
    const profit = current - minPrice;
    if (profit > largestProfit) {
      largestProfit = profit;
    }
    /*
    Update min price when we find a new lowest price.
    We don't care about previous mins because we can technically "buy again" at
    the lower price and sell at the largest window.
    */
    if (current < minPrice) {
      minPrice = current;
    }
  }
  return largestProfit
};

prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices)) // 5

prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices)) // 0

prices = [2, 4, 1]
console.log(maxProfit(prices)) // 2

