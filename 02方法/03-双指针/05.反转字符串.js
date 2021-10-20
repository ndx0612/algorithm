// https://leetcode-cn.com/problems/reverse-string/

// // 暴力题解
// var reverseString = function (s) {
//   for (let i = 0; i < s.length / 2; i++) {
//     let n = s[s.length - i - 1];
//     s[s.length - i - 1] = s[i];
//     s[i] = n;
//   }
//   return s;
// };

// 双指针
var reverseString = function (s) {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};


let s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s));
