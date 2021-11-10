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

function breadthSort(rootList, target) {
  if (rootList == null || rootList.length == 0) return false;
  var childList = []; //存放下一层的所有子节点
  for (var i = 0; i < rootList.length; i++) {//依次遍历所有节点
    if (rootList[i].value == target) {
      return true;
    } else {
      childList.push(rootList[i].left);//把节点的左子节点放入
      childList.push(rootList[i].right);//把节点的右子节点放入
    }
  }

  return breadthSort(childList, target);//在下一层节点中继续搜索
}
console.log(breadthSort([a], 'd'));
