var arr = [
  [5, 3, 3, 4],
  [1, 4, 7, 7],
  [1, 6, 0, 6],
  [1, 2, 3, 1],
  [2, 2, 1, 9]
];
var xm = arr.length;  //x 最大值
var ym = arr[0].length; // y最大值

var bestl = 0; //记录最优解
var r = [];    //记录最优解的路径

var path = []; //临时路径
var c = 0;     //临时最优解
trace(0, 0);
console.log(bestl)
console.log(r)
function trace(x, y) {
  if (x < xm && y < ym) {  //当还没有到达终点时，可以继续搜索
    c = c + arr[x][y];  //加上当前点，继续遍历
    path.push({ x: x, y: y }); //加入当前点路径
    trace(x + 1, y);
    trace(x, y + 1);
    c = c - arr[x][y]; //遍历结束，回退到上级
    path.pop();         //回退到上级
  } else if (x >= xm - 1 && y >= ym - 1) { //到达终点
    if (c > bestl) {  //到达终点，并且比最优解还大，则记录
      bestl = c;
      r = path.slice(0);
    }
  }
}