// https://leetcode-cn.com/problems/climbing-stairs/
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 方法一:递归,正确但是超时
// var climbStairs = function (n) {
//   if (n == 1) {
//     return 1;
//   } else if (n == 2) {
//     return 2;
//   } else {
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// };
var climbStairs = function (n) {
  // d(n) = d(n-1) + d(n-2)
  // d1 = 1 ,d2 = 2
  // 列举
  // d3 = d2 + d1 = 2+1 = 3
  // d4 = d3 + d2 = 3+2 = 5 (d3已经求出)
  // d5 = …… (d4已经求出)
  // ……
  if (n == 2) {
    return 2;
  }
  let dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};



console.log(climbStairs(4));