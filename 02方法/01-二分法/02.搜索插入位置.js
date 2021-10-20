// https://leetcode-cn.com/problems/search-insert-position/

var searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const mids = nums[mid];
    if (mids < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

let nums = [1, 3], target = 2;

console.log(searchInsert(nums, target));