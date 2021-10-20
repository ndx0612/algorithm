// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums, target) {
  let start = -1, end = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      start = i;
      break;
    }
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] == target) {
      end = j;
      break;
    }
  }
  return [start, end];
};