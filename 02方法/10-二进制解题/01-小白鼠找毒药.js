/**
 * 现在有100瓶毒药,仅有一瓶有毒,如何使用最少的小白鼠判断哪一瓶有毒
 */


 let str = ''
 const arr = ['death', 'live', 'death', 'live', 'death', 'live', 'death'];
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] == 'death') {
     str += '0'
   } else {
     str += '1'
   }
 }
 let num = parseInt(str, 2)
 console.log(num);