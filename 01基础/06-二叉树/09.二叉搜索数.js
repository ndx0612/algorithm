// 1、写一个数组,往二叉树里面存数据
// 2、写一个节点
// 3、把数据添加到二叉树里面(构建二叉树)
// 4、判断目标值是否在二叉树上

let arr = [6, 4, 9, 8, 3, 5, 1];

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 给一个节点和一个num,判断如何往树上添加
function addNode(root, num) {
  // 当数值小于左边节点时候，先判断左边节点是否为空，为空赋值，不为空继续向下递归
  if (num < root.value) {
    if (root.left == null) {
      root.left = new Node(num);
    } else {
      addNode(root.left, num);
    }
  } else {
    if (root.right == null) {
      root.right = new Node(num);
    } else {
      addNode(root.right, num);
    }
  }
}

function buildTree(arr) {
  let root = new Node(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    addNode(root, arr[i]);
  }
  return root;
}

let root = buildTree(arr);

function yesOnTree(root, target) {
  if (root == null) {
    return false;
  }
  if (target == root.value) {
    return true;
  }
  // 如果目标值小于节点值(且左边节点不为空)，传入左边节点，向下递归
  if (target < root.value) {
    return yesOnTree(root.left, target);
  } else {
    return yesOnTree(root.right, target);
  }
}

console.log(yesOnTree(root, 0));

