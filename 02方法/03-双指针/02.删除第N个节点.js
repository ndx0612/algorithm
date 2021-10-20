// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function (head, n) {
  if (head.next == null) {
    return head;
  }
  slow = fast = head;
  let i = 0;
  while (i < n) {
    i++;
    fast = fast.next;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
};