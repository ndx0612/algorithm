/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else if (n == 2) {
    return 1
  } else {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
    let num4 = 0;
    for (let i = 3; i <= n; i++) {
      num4 = num1 + num2 + num3;
      // console.log(`${num4}=${num1}+${num2}+${num3}`);
      num1 = num2;
      num2 = num3;
      num3 = num4;
    }
    return num4;
  }
};
// console.log(tribonacci(1));
// console.log(tribonacci(2));
// console.log(tribonacci(3));
console.log(tribonacci(25));
// f0 = 0
// f1 = 1
// f2 = 1