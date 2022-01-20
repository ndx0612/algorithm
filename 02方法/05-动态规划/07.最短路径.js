// https://leetcode-cn.com/problems/minimum-path-sum/
// 核心：计算到每一个点的最小值,并且保存下当前步数
// 除了第一排和第一列，当前路径最小值为左或上当中较小值加上当前路径
var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i == 0 && j != 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (i != 0 && j == 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (i != 0 && j != 0) {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      } else {
        continue;
      }
    }
  }
  console.log(grid);
};

// dp[i][j] = min(dp[i−1][j], dp[i][j−1]) + grid[i][j]

var arr = [
  [5, 3, 3, 4],
  [1, 4, 7, 7],
  [1, 6, 0, 6],
  [1, 2, 3, 1],
  [2, 2, 1, 9]
];
console.log(minPathSum(arr));

