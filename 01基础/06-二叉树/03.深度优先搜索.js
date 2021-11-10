// 深度优先搜索

// 1、写一颗二叉树
// 2、递归左右节点
// 3、左右节点都为false、返回false

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

function deepSearch(root, value) {
  if (root == null) {
    return false;
  }
  if (root.value == value) {
    return true;
  }
  var left = deepSearch(root.left, value);
  var right = deepSearch(root.right, value);
  return left || right;
}

function dfs(root) {
  console.log(value);
}


console.log(deepSearch(a, "l"));
