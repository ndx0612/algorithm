function Node(value) {
  this.value = value;
  this.chillds = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.chillds.push(c);
a.chillds.push(f);
a.chillds.push(b);
b.chillds.push(d);
b.chillds.push(e);

function deepSearch(root) {
  if (root == null) {
    return;
  }
  console.log(root.value);
  for (let i = 0; i < root.chillds.length; i++) {
    deepSearch(root.chillds[i])
  }
}

deepSearch(a);
