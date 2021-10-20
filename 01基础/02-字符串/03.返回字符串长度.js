// https://leetcode-cn.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") {
      res++;
    } else if (s[i] == " " && res != 0) {
      return res;
    }
  }
  return res;
};

let s = "luffy is still joyboy";
// lengthOfLastWord(s);
console.log(lengthOfLastWord(s));