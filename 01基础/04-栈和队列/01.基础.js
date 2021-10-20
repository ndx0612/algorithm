// 栈
var Stack = function () {
  this.arr = [];
  this.push = function (value) {
    return this.arr.push(value);
  };
  this.pop = function () {
    return this.arr.pop();
  }
}

var s = new Stack();

s.push(1);
s.push(2);
s.push(3);
console.log(s.arr);
s.pop()
console.log(s.arr);


// 队列
function Queue() {
  this.arr = [];
  this.push = function (value) {
    return this.arr.push(value);
  }
  this.shift = function () {
    return this.arr.shift();
  }
}
