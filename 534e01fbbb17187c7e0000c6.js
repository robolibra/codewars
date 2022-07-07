/* https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. */

let spiral = [];
let tmp = [];

const n = 5;

let index = n - 1; // end index
let length = 0; // elements to insert

let tRows = 0
let bRows = 0;
let rColumns = 0;
let lColumns = 0;

let add = 1;

spiralBase(n);

length = n;

while (length > 0) {
    // left-right
    length = n - lColumns * 2 - rColumns * 2;
    if (length > 0) {
        fillRow(tRows * 2, lColumns * 2 - 1 + add, index - rColumns * 2);
        tRows++;
        add = 0;
    } else { break }

    // up-down
    length = n - tRows * 2 - bRows * 2 + 1;
    if (length > 0) {
        fillColumn(index - rColumns * 2, tRows * 2 - 1, index - bRows * 2);
        rColumns++;
    } else { break }

    // right-left
    length = n - rColumns * 2 - lColumns * 2;
    if (length > 0) {
        fillRow(index - bRows * 2, lColumns * 2, index - rColumns * 2 + 1);
        bRows++;
    } else { break }

    // down-up
    length = n - tRows * 2 - bRows * 2 + 1;
    if (length > 0) {
        fillColumn(lColumns * 2, tRows * 2, index - bRows * 2 + 1);
        lColumns++;
    } else { break }
}




console.log(spiral);

function spiralBase(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tmp.push('.');
        }
        spiral.push(tmp);
        tmp = [];
    }
}

function fillRow(row, startIndex, endIndex) {
    for (i = startIndex; i <= endIndex; i++) {
        spiral[row][i] = '0';
    }
}

function fillColumn(column, startIndex, endIndex) {
    for (i = startIndex; i <= endIndex; i++) {
        spiral[i][column] = '0';
    }
}