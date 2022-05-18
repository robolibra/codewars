// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
/* 
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
Random Tests
100 tests with 1 - 10 intervals from the range [-20, 20]
100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]
 */

// data preparing
let tests = Math.trunc(Math.random() * 8 + 3); // tests quantity

let interval = [];
let tmpint1;
let tmpint2;

for (let i = 0; i < tests; i++) {
    tmpint1 = Math.trunc(Math.random() * 10 - 5); // number range
    tmpint2 = Math.trunc(Math.random() * 10 - 5);
    interval.push([tmpint1, tmpint2]);
}

let out = '';
for (let i = 0; i < interval.length; i++) {
    interval[i].sort((a, b) => a - b);
}

interval.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < interval.length; i++) {
    out += `[${interval[i]}]`;
}
console.log(out); // set of ranges to calculate

for (let i = 0; i < interval.length - 1; i++) {
    let tmp = [];
    if (isOverlap(interval[i], interval[i + 1])) {
        tmp = overlapInterval(interval[i], interval[i + 1]);
        interval.splice(i, 2, tmp);
        i--;
    }
}
console.log(interval);

let count = 0;

for (let i = 0; i < interval.length; i++) {
    count += interval[i][1] - interval[i][0];
}

console.log(count);

//////////////////////////////////////////
// is there intervals overlapping? // ret bool
function isOverlap(arr1, arr2) {
    let temp = [];
    temp[0] = arr1;
    temp[1] = arr2;
    temp = temp.sort((a, b) => a[0] - b[0]);

    if (temp[0][1] > temp[1][0]) {
        return true;
    }

    return false;
}

// find the overlapping range
function overlapInterval(tmp1, tmp2) {
    let temp = [];

    temp[0] = tmp1;
    temp[1] = tmp2;
    temp = temp.sort((a, b) => a[0] - b[0]);

    tmp1 = temp[0];
    tmp2 = temp[1];

    let newIntrvl = []

    if (tmp1[1] > tmp2[0]) {

        if (tmp1[0] < tmp2[0]) {
            newIntrvl[0] = tmp1[0];
            if (tmp1[1] > tmp2[1]) {
                newIntrvl[1] = tmp1[1];
            } else { newIntrvl[1] = tmp2[1] }
        } else {
            newIntrvl[0] = tmp2[0];
            if (tmp1[1] > tmp2[1]) {
                newIntrvl[1] = tmp1[1];
            } else { newIntrvl[1] = tmp2[1] }
        }
    } else {
        newIntrvl = tmp1;
    }
    return newIntrvl;
}