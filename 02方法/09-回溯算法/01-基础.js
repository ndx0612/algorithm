// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// https://leetcode-cn.com/problems/permutations/

// 递归

var permute = function (nums) {
  const res = [];

  function back(path) {
    // 当一个递归完成后，则把该数组添加res里面
    if (path.length == nums.length) {
      res.push(path);
      return;
    }
    // 如果已经存在，则直接跳出，不存在则往里面添加
    nums.forEach(element => {
      if (path.includes(element)) {
        return;
      }
      back(path.concat(element))
    });
  }

  back([])

  return res;
};

let nums = [1, 2, 3];
console.log(permute(nums));


