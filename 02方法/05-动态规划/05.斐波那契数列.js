/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    for (let i = 2; i <= n; i++) {
      num3 = num1 + num2; // 关系为f(n-2) + f(n-1) = f(n)
      num1 = num2;
      num2 = num3;
    }
    return num3;
  }
};
// 0 1 1 2 3 5 8 
// f0 + f1 = f2
// f1 + f2 = f3
// f(n-2) + f(n-1) = f(n);

console.log(fib(3));
console.log(fib(4));