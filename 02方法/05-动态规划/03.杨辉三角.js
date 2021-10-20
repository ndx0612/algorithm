// https://leetcode-cn.com/problems/pascals-triangle/
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
var generate = function (numRows) {
  // 数组a,总数组
  // 数组b,每一行的数组
  let a = [[1]];
  for (let i = 1; i < numRows; i++) {
    let b = []
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        b[j] = 1;
      } else {
        b[j] = a[i - 1][j] + a[i - 1][j - 1];
      }
    }
    a.push(b);
  }
  return a;
};
