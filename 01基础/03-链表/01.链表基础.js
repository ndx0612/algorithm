/*
要求：写一个节点构成的链表，然后遍历这个链表
步骤：
1、写一个节点Node
2、往节点里添加值和指向
3、遍历这个链表bianLink()
*/

// a.next = b;  a的下一个节点指向b
// a = a.next;  向下遍历节点

// 定义一个节点
let Node = function (value) {
  this.value = value;
  this.next = null;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 方法一：遍历链表
function bianLink_01(root) {
  let temp = root;
  while (true) {
    if (temp == null) {
      break;
    } else {
      console.log(temp.value);
    }
    temp = temp.next;
  }
}

// 方法二：递归遍历链表
function bianLink_02(root) {
  if (root == null) return;
  else {
    console.log(root.value);
    bianLink_02(root.next);
  }
}

// 思路：
// 1、找到最后一个节点，因为最后一个节点无法指向上一个节点，所以找倒数第二个节点。if(root.next.next == null)
// 2、让最后一个节点指向倒数第二个节点(root.next.next = root)，然后倒数第二个节点指向null。
// 3、因为倒数第二个节点指向null，所以就变成当前最后一个节点。

// 知识点三：链表逆转
function nizhi(root) {
  if (root.next.next == null) {
    root.next.next = root;
    root.next = null;
  } else {
    nizhi(root.next);
    root.next.next = root;
    root.next = null;
  }
}

nizhi(a);
bianLink_01(e);
