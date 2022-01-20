// https://leetcode-cn.com/problems/two-sum/

// 1、判断map中是否有这个键(target-num[i])
// 2、没有的话添加
// 3、有的话返回
var twoSum = function (nums, target) {
  const mymap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mymap.has(target - nums[i])) {
      return [mymap.get(target - nums[i]), i]
    }
    mymap.set(nums[i], i)
  }
};

let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target));