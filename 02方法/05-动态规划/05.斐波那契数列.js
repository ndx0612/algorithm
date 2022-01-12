// 0 1 1 2 3 5 8 13
// f(n) = f(n-1) + f(n-2)

function feibo(n) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  return feibo(n - 1) + feibo(n - 2);
}

console.log(feibo(7));