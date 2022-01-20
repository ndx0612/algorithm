// https://leetcode-cn.com/problems/subsets/

var subsets = function (nums) {
  let res = [];
  // 记录走过的路径;
  let track = [];
  const backtrack = (nums, start, track) => {
    res.push([...track]);
    // 注意 i 从 start 开始递增
    for (let i = start; i < nums.length; i++) {
      // 做选择
      track.push(nums[i]);
      // 回溯
      backtrack(nums, i + 1, track);
      // 撤销选择
      track.pop();
    }
  };
  backtrack(nums, 0, track);
  return res;
};

const nums = [1, 2, 3];
console.log(subsets(nums));


