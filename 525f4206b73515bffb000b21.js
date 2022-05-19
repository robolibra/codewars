//https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
/* 
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
    let result = [];

    a = a.padStart(a.length + b.length - a.length, '0');
    b = b.padStart(b.length + a.length - b.length, '0');

    let offset = 0;
    let sum = 0;

    for (let i = (a.length - 1); i >= 0; i--) {
        sum = +a[i] + +b[i] + offset;
        offset = 0;
        if (sum > 9) {
            sum = sum % 10;
            offset = 1;
        }
        result.unshift(sum);
    }
    if (offset) { result.unshift(offset) }
    return result.join('');
}


function add (a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop()
      res = c % 10 + res
      c = c > 9
    }
    return res
  }