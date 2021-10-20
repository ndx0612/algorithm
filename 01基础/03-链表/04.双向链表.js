function Node(value) {
  this.value = value;
  this.next = null;
  this.pre = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");

a.next = b;

b.next = c;
b.pre = a;

c.next = d;
c.pre = b;

d.next = e;
d.pre = c;

e.pre = d;

