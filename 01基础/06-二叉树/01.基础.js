// 1、写一个节点
// 2、完成完整的二叉树
// 3、遍历这可二叉树(3种方法)

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

// 前序遍历(中、左、右)
function pre(root) {
  // 判断是否为空,为空跳出
  if (root == null) {
    return;
  }
  // 打印中间节点
  console.log(root.value);
  // 递归遍历左节点
  pre(root.left);
  // 递归遍历右节点
  pre(root.right);
}
// pre(a);

// 中序遍历(左、中、右)
function mediumOrder(root) {
  if (root == null) {
    return;
  }
  mediumOrder(root.left);
  console.log(root.value);
  mediumOrder(root.right);
}
// mediumOrder(a);

// 后序遍历(左、右、中)
function postorderTraversal(root) {
  if (root == null) {
    return;
  }
  postorderTraversal(root.left);
  postorderTraversal(root.right);
  console.log(root.value);
}
postorderTraversal(a);