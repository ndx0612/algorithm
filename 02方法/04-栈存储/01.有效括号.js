// https://leetcode-cn.com/problems/longest-valid-parentheses/

var longestValidParentheses = function (s) {
  let arr = [];
  let num = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      arr.push(1);
    } else if (s[i] == ')' && arr.length != 0) {
      arr.pop();
      num += 2;
      if (res < num) {
        res = num;
      }
    } else {
      arr = [];
      num = 0;
    }
  }
  return res;
};

var s = "()(()";
console.log(longestValidParentheses(s));