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

function wideSearch(list, value) {
  // 判断为空直接返回
  if (list == null || list.length == 0) {
    return false;
  }
  // 当前层数所有子节点存储到这个列表里面
  let childList = [];
  for (let i = 0; i < list.length; i++) {
    // 如果找到目标值，返回true
    if (list != null && list[i].value == value) {
      return true;
    } else {
      // 没有找到,添加左右子树
      childList.push(list[i].left);
      childList.push(list[i].right);
    }
  }
  return false;
}

console.log(wideSearch([a], "e"));
