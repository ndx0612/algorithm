// 1、写两棵一样的二叉树
// 2、比较二叉树

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 第一棵树
let a1 = new Node("a");
let b1 = new Node("b");
let c1 = new Node("c");
let d1 = new Node("d");
let e1 = new Node("e");
let f1 = new Node("f");
let g1 = new Node("g");

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
// b1.right = e1;

// 第二棵树
let a2 = new Node("a");
let b2 = new Node("b");
let c2 = new Node("c");
let d2 = new Node("d");
let e2 = new Node("e");
let f2 = new Node("f");
let g2 = new Node("g");

a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
// b2.right = e2;

function compareTree(root1, root2) {
  if (root1 == root2) {
    return true;
  }
  // 其中一个为空,另一个不为空,返回false
  if ((root1 == null && root2 != null) || (root2 == null && root1 != null)) {
    return false;
  }

  // 相同位置的值不相等
  if (root1.value != root2.value) {
    return false;
  }

  // 向下递归节点
  let leftBool = compareTree(root1.left, root2.left);
  let rightBoll = compareTree(root1.right, root2.right);
  return leftBool && rightBoll;

}

console.log(compareTree(a1, a2));

