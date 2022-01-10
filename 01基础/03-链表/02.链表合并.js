// https://leetcode-cn.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function (l1, l2) {
  let newnode = new ListNode(-100);
  let header = newnode;
  while (true) {
    if (l2 == null || l1.val <= l2.val) {
      newnode = l1;
      l1 = l1.next;
      newnode = newnode.next;
    } else if (l1 == null || l1.val > l2.val) {
      newnode = l2;
      l1 = l1.next;
      newnode = newnode.next;
    } else {
      return header;
    }
  }
};
