// https://leetcode.cn/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxIndex = 0;
  let step = 0;
  for (let i = 0; i < nums.length; i++) {
    let curIndex = i + nums[i];
    if (curIndex > maxIndex) {
      maxIndex = curIndex;
      step++;
    }
    if (curIndex >= nums.length - 1) {
      return step;
    }
  }
};

const nums = [2, 3, 1, 1, 4]

console.log(jump(nums));