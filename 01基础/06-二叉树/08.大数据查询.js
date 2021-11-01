let arr = new Array(10000);
for (let i = 0; i < 10000; i++) {
  arr[i] = Math.floor(Math.random() * 10000);
}

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false;
}

console.log(search(arr, 100));

