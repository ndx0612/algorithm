// 根据前序、中序还原二叉树

var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function getTree(qian, zhong) {
  // 判断为空时候直接跳出
  if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) {
    return null;
  }
  // 新建一个根节点(前序遍历的第一个)
  let root = new Node(qian[0]);

  // 得到根节点在中序遍历中的位置
  let index = zhong.indexOf(qian[0]);

  // 得到前序遍历的左、右子树
  let qianLeft = qian.slice(1, index + 1);
  let qianRight = qian.slice(index + 1, qian.length);

  // 得到中序遍历的左、右子树
  let zhongLeft = zhong.slice(0, index);
  let zhongRight = zhong.slice(index + 1, zhong.length);

  // 左子树假设根节点，递归qianLeft和zhongLeft
  root.left = getTree(qianLeft, zhongLeft);
  // 左子树假设根节点，递归qianLeft和zhongLeft
  root.right = getTree(qianRight, zhongRight);
  return root;
}

console.log(getTree(qian, zhong));