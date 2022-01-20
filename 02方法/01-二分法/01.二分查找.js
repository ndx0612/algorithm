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

let nums = [-1, 0, 3, 5, 9, 12], target = 5;
// min1 max6 mid3  下标：0   5  -> 2
// min4 max6 mid5  下标：3   5  -> 4
// min4 max4 mid4  下标：3   3   -> 3


console.log(search(nums, target));