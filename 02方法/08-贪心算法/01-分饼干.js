// https://leetcode-cn.com/problems/assign-cookies/

var findContentChildren = function (g, s) {
  function sortArr(a, b) {
    return a - b;
  }
  g.sort(sortArr);
  s.sort(sortArr);
  let gn = 0;
  let sn = 0;
  let res = 0;
  while (gn < g.length && sn < s.length) {
    if (g[gn] <= s[sn]) {
      gn++;
      sn++;
      res++;
    } else {
      sn++;
    }
  }
  return res;
};

let g = [1, 2], s = [1, 2, 3];
console.log(findContentChildren(g, s));