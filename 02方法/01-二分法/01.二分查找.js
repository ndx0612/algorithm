// https://leetcode-cn.com/problems/binary-search/

var search = function (nums, target) {
  let min = 0, max = nums.length;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12], target = 9;
console.log(search(nums, target));