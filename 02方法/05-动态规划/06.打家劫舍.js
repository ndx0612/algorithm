// https://leetcode-cn.com/problems/house-robber/
// [2,7,9,3,1] 两数组不能相邻,求相加最大
// 求f(n-1) 和 f(n-2) + f[n-1] 最大值
// [2]
// [2, 7] // 选大的
// [2, 7, 9] // 
// [2, 7, 9, 10]
// [2, 7, 9, 10, 6]

// 前3个最大值 = 前1个最大值加上第3个 , 前2个最大值
// 前4个最大值 = 前2个最大值加上第4个 , 前3个最大值
// 前5个最大值 = 前3个最大值加上第3个 , 前4个最大值


var rob = function (nums) {
  let n1 = nums[0], n2 = Math.max(nums[0], nums[1]);
  if (nums.length <= 2) {
    return n2;
  }
  let res = 0;
  for (let i = 2; i < nums.length; i++) {
    res = Math.max(n1 + nums[i], n2)
    n1 = n2;
    n2 = res;
  }
  return res;
};

const nums = [2, 7, 9, 3, 1]
console.log(rob(nums));
