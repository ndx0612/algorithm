// https://leetcode.cn/problems/number-of-islands/submissions/
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]

// 岛屿问题
const dfs = (grid, i, j) => {
  // 边界直接return
  if (!isArea(grid, i, j)) {
    return 0;
  }
  // 不是陆地，直接return
  if (grid[i][j] == 0 || grid[i][j] == 2) {
    return 0;
  }
  // 将格子标记为「已遍历过」
  grid[i][j] = 2;
  // 继续前进
  return 1 +
    dfs(grid, i - 1, j) +
    dfs(grid, i, j - 1) +
    dfs(grid, i + 1, j) +
    dfs(grid, i, j + 1);
}

// 判断是否在网络中，在网格中返回true，不在网格中返回false
const isArea = (grid, i, j) => {
  return 0 <= i && i < grid.length && 0 <= j && j < grid[0].length;
}

// 岛屿数量
var numIslands = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        res += 1;
        dfs(grid, i, j);
      }
    }
  }
  return res;
};

console.log(numIslands(grid))


// 岛屿最大面积
var maxAreaOfIsland = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        let s = dfs(grid, i, j)
        if (res < s) {
          res = s;
        }
      }
    }
  }
  return res;
};


