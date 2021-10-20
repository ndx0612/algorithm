// https://leetcode-cn.com/problems/move-zeroes/
var moveZeroes = function (nums) {
  let left = 0
  let right = 0
  let len = nums.length
  while (right < len) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }

  return nums
};

let nums = [0, 1, 0, 3, 12];
// 1,0,0,3,12
// 1,3,0,0,12
// 1,3,12,0,0

console.log(moveZeroes(nums));