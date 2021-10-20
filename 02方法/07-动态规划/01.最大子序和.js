// https://leetcode-cn.com/problems/maximum-subarray/
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let res = 0;
  const map = new Map()
  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end]) && map.get(s[end]) >= start) {
      start = map.get(s[end]) + 1
    }
    res = Math.max(res, end - start + 1)
    map.set(s[end], end)
  }
  return res;
};

var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

