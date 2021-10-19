// https://leetcode-cn.com/problems/plus-one/

// 方法一
// 1、先将数组转化为数字
// 2、数字加一
// 3、数字转化为数组
// var plusOne = function (digits) {
//   let num = 0;
//   if (digits[digits.length - 1] != 9) { // 优化代码，可以直接加一的直接加
//     digits[digits.length - 1] += 1;
//     return digits;
//   } else {
//     // 数组转数字
//     for (let i = 0; i < digits.length; i++) {
//       num += digits[i] * (10 ** (digits.length - i - 1));
//     }
//     num += 1; // 数字加一

//     let str = num + ""; // 数字在转回数组
//     let resultArr = [];
//     for (var i = 0; i < str.length; i++) {
//       resultArr.push(parseInt(str[i]))
//     }
//     return resultArr;
//   }
// };

var plusOne = function (digits) {
  let n = digits.length;
  digits[n - 1]++;
  let i = 0;
  while (digits[n - 1 - i] == 10) {
    digits[n - 1 - i] = 0;
    if (n - i - 2 < 0) {
      digits.unshift(1)
    } else {
      digits[n - 2 - i] += 1;
    }
    i++;
  }
  return digits;
};

let digits = [9, 9, 9, 7];
console.log(plusOne(digits));