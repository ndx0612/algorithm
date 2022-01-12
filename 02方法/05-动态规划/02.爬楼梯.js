// https://leetcode-cn.com/problems/climbing-stairs/
// 给你一个数n个台阶，有多少种可以爬楼
// 求n-1个台阶加上n-2个台阶有多少种方法
// 1层1中 2层2种

// 解法一：递归
var climbStairs1 = function (n) {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  }
  return climbStairs1(n - 1) + climbStairs1(n - 2);
};

// 解法二：动态规划
var climbStairs2 = function (n) {
  let n1 = 1, n2 = 2;
  let res = 0;
  for (let i = 0; i < n - 2; i++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
};

console.log(climbStairs1(10));
console.log(climbStairs2(10));
