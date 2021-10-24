// 深度优先搜索
// 1、新建一个节点
// 2、完成二叉树
// 3、深度优先搜索

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
  // 为空则是false
  if (root == null) {
    return false;
  }
  // 如果是根节点,直接返回true
  if (root.value == value) {
    return true;
  }
  let left = deepSearch(root.left, value);
  let right = deepSearch(root.right, value);
  return left || right;
}

console.log(deepSearch(a, "n"));

