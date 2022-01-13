// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function (prices) {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1];
    }
  }
  return res;
};

console.log(maxProfit([1,2,3,4,5]));
