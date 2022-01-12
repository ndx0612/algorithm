// 把一个大问题，分成规模较小的问题来解决，用递归的方式来解决小问题
// 动态规划：小问题之间有关联

// https://leetcode-cn.com/problems/guess-number-higher-or-lower/

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const rec = (left, right) => {
    if (left > right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      return rec(mid + 1, right)
    } else {
      return rec(1, mid - 1)
    }
  }
};