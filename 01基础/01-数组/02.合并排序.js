// https://leetcode-cn.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  // 删除后面的0
  nums1.splice(m);
  nums2.splice(n);
  // 拼接数组
  nums1 = nums1.concat(...nums2)
  // 数组排序
  nums1 = nums1.sort();
  return nums1;
};

// var merge = function (nums1, m, nums2, n) {
//   nums1.splice(m);
//   nums2.splice(n);
//   let nums3 = [...nums1, ...nums2];
//   return nums3.sort();
// };
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
console.log(merge(nums1, m, nums2, n));