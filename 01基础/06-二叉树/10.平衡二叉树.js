// 定义: 所有节点的深度差不超过1

// 1、写一个二叉树
// 2、学一个方法获取左右节点深度
// 3、判断是否平衡

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.left = c;
a.right = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;

// 获取节点深度
function getDeep(root) {
  if (root == null) {
    return 0;
  }
  let leftDeep = getDeep(root.left);
  let rightDeep = getDeep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}
// console.log(getDeep(a));

// 判断是否平衡
function isBalance(root) {
  if (root == null) return true;
  var leftDeep = getDeep(root.left);
  var rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) > 1) {//不平衡
    return false;
  } else {
    return isBalance(root.left) && isBalance(root.right);
  }
}
console.log(isBalance(a));
