// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。


// 暴力解法,超出时间限制
// var maxProfit = function (prices) {
//   let a = 9999;
//   let max = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < a) {
//       for (let j = i; j < prices.length; j++) {
//         if (max < prices[j] - prices[i]) {
//           max = prices[j] - prices[i];
//         }
//       }
//     }
//   }
//   return max;
// };

const maxProfit = prices => {
  const len = prices.length;
  // 创建dp数组
  const dp = new Array(len).fill([0, 0]);
  // dp数组初始化
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
      // 更新dp[i]
      dp[i] = [
          Math.max(dp[i - 1][0], -prices[i]),
          Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
      ];
  }
  return dp[len - 1][1];
};

let array = [7, 6, 4, 3, 1];

console.log(maxProfit(array));