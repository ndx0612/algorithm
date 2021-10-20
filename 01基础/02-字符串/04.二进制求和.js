// https://leetcode-cn.com/problems/add-binary/

// 超大数无法通过
var addBinary = function (a, b) {
  a = parseInt(a, 2);
  b = parseInt(b, 2);
  let sum = a + b;
  return sum.toString(2);
};

let a = "1010", b = "1011";
console.log(addBinary(a, b));