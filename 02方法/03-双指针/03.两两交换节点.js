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

var swapPairs = function (head) {
  while (true) {
    if (head == null || head.next == null) {
      break;
    };
    let temp = head.next.next;
    head.next.next = head;
    head.next = temp;
    head = head.next;
  }
};

swapPairs(a);
bianLink_01(b);
