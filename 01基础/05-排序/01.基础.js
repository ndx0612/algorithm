/**
 * 基本排序：
 * 1.每次选择数组中的最小值
 * 2.将最小值添加到新数组中，然后删除
 * 
 * 冒泡排序：(升序)
 * 1.两两比较，如果第一个小于第二个，则交换(目的，最大值放到最后)
 * 2.重头开始继续两两比较(目的，第二大值放到倒数第二)
 * 
 * 选择排序：
 * 1.内层循环，将第一个值与最小值交换
 * 2.第二个与剩下的最小值交换
 * 
 * 快速排序
 */
function sortNumber(a, b) {
  return a - b;
}
nums = [1, 5, 9, 4, 15, 21, 8];
// nums = nums.sort(sortNumber);
// console.log(nums);

function quickSort(arr) {
  if (arr.length == 0 || arr == null) return [];
  var leader = arr[0];
  var left = [];
  var right = [];
  for (var i = 1; i < arr.length; i++) {

    if (arr[i] < leader) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }

    left = quickSort(left);
    right = quickSort(right)

    left.push(leader);
    return left.concat(right);
  }
}
console.log(quickSort(nums));