// https://leetcode-cn.com/problems/squares-of-a-sorted-array/

var sortedSquares = function (nums) {
  // 先平方
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }
  // 升序排序
  function sortNumber(a, b) {
    return a - b
  }
  nums = nums.sort(sortNumber);
  return nums;
};

let nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));