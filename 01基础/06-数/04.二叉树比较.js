function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a1 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

var a2 = new Node('a');
var b2 = new Node('b');
var c2 = new Node('c');
var d2 = new Node('d');
var e2 = new Node('e');
var f2 = new Node('f');
var g2 = new Node('g');

a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;

function compareTree(root1, root2) {
  if (root1 == root2) return true;
  if (root1 == null && root2 != null || root1 != null && root2 == null) return false;
  var leftBool = compareTree(root1.left, root2.left);
  var rightBool = compareTree(root1.right, root2.right);
  return leftBool && rightBool;
}
// console.log(compareTree(a1, a2));


/*
新增了什么，修改了什么，删除了什么？
var diffList = []
*/
function diffTree(root1, root2, diffList) {
  if (root1 == root2) return diffList;
  if (root1 == null && root2 != null) {
    diffList.push({
      type: "新增",
      orangin: null,
      now: root2
    });
  }
}