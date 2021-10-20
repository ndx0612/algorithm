// https://leetcode-cn.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1 = nums1.concat(...nums2)
  nums1 = nums1.sort();
  // let nums3 = [...nums1, ...nums2];
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