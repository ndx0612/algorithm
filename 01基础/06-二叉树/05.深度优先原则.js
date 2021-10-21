// 深度优先原则，对于二叉树来说，类似于前序遍历
function deepSearch(root, target) {
  if (root == null) return false;
  if (root.value == target) return true;
  var left = deepSearch(root.left, target);
  var right = deepSearch(root.right, target);
  return left || right;
}
console.log(deepSearch(a, 'D'));