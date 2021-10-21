// 二叉树3种遍历

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node('g');

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;

d.left = g;

// 前序遍历
function f1(root) {
  if ((root == null)) {
    return;
  }
  console.log(root.value);
  f1(root.left);
  f1(root.right);
}
// f1(a);

// 中序遍历
function f2(root) {
  if ((root == null)) {
    return;
  }
  f1(root.left);
  console.log(root.value);
  f1(root.right);
}
f2(a);


// 后序遍历
function f3(root) {
  if (root == null) return;
  f3(root.left);
  f3(root.right);
  console.log(root.value);
}
// f3(a);






