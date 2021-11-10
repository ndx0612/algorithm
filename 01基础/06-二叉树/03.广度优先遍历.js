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

// 广度优先遍历
function levelOrder(root) {
  if (root == null) {
    return []
  }
  let result = []
  let queue = [root]
  while (queue.length) {
    // 每一层的节点数
    let level = queue.length
    let currLevel = []
    // 每次遍历一层元素
    for (let i = 0; i < level; i++) {
      // 当前访问的节点出队
      let curr = queue.shift()
      // 出队节点的子女入队
      curr.left ? queue.push(curr.left) : ''
      curr.right ? queue.push(curr.right) : ''
      currLevel.push(curr.value)
    }
    result.push(currLevel)
  }
  return result
};

console.log(levelOrder(a));