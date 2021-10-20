// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function (head) {
  let cur = head;
  if (head == null) {
    return head;
  }
  while (true) {
    if (cur.next == null) {
      break;
    }
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};