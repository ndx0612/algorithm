// https://leetcode-cn.com/problems/palindrome-number/
var isPalindrome = function (s) {
  // 类型转换成字符串
  let str = s + '';
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i])
  }
  console.log(strArr);
};

let s = 121;

isPalindrome(s);
