// https://leetcode-cn.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  if (strs.length == 1 || strs[0].length == 0) {
    return strs[0];
  }
  let res = "";
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[0][j] != strs[i][j]) {
        return res;
      }
    }
    res += strs[0][j];
  }
  return res;
};

let strs = ["flower", "flower", "flower", "flower"];

console.log(longestCommonPrefix(strs));