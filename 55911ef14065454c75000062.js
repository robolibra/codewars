// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript
// big numbers multiplication

let a = '3452345';
let b = '234532523';

let tmpResult = [];
let result = 0;

let offset = 0;
let k = 0;

for (let i = b.length - 1; i >= 0; i--) {
  k = b.length - i - 1;
  for (let j = a.length - 1; j >= 0; j--) {
    result = +a[j] * +b[i] + offset;
    offset = Math.trunc(result / 10);
    result = result % 10;
    if (k + 1 > tmpResult.length) {
      tmpResult.unshift(result);

    } else {
      offset = Math.trunc((result + tmpResult[tmpResult.length - k - 1]) / 10) + offset;
      tmpResult[tmpResult.length - k - 1] = (result + tmpResult[tmpResult.length - k - 1]) % 10;
    }
    k++;
  }
  if (offset > 0) {
    tmpResult.unshift(offset);
  }
  offset = 0;
}

tmpResult = tmpResult.join('').replace(/^0+/, '');
if (tmpResult === '') { tmpResult = '0' }

console.log(tmpResult.join(''));


// best pratice

/* 
function multiply(a, b) {
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var stack = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;
    var move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}
*/