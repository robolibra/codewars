/* 
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" 
*/

/* 
function solution(list){
    for(var i = 0; i < list.length; i++){
       var j = i;
       while(list[j] - list[j+1] == -1) j++;
       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
   }
   return list.join();
 }
  */

let list = [-54, -53, -51, -49, -47, -45, -43, -41, -40, -38, -36, -34, -31, -28, -26, -25, -23, -22, -19, -18, -16];
let out = '';
let p = 0;

console.log('Inital array: ', list.toString());

for (let i = 0; i < list.length; i++) {
    p = i;

    while (list[i + 1] - list[i] === 1 && i < list.length - 1) {
        i++;
    }

    if (i - p > 1) {
        out += list[p].toString() + '-' + list[i].toString() + ',';
    } else if (i - p == 1) {
        out += list[p].toString() + ',' + list[i].toString() + ',';
    } else {
        out += list[p].toString() + ',';
    }
}

out = out.slice(0, out.length - 1);

console.log(`Result: ${out}`);
