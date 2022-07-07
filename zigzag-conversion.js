https://leetcode.com/problems/zigzag-conversion/submissions/

let convert = function (str, numRows) {
    let numMiddle = numRows - 2;
    let blocks = Math.trunc(str.length / (numRows + numMiddle));
    let left = 0;
    let result = '';
    let array = [];
    let columns = 0;
    if (blocks != 0) {
        columns = blocks * (numMiddle + 1);
        left = str.length % (blocks * (numRows + numMiddle));
    } else {
        columns = 0;
        left = str.length;
    }

    if (left > numRows) {
        columns = columns + left - numRows + 1;
    } else {
        if (left != 0) { columns++ };
    }

    let temp = [];
    for (let i = 0; i < numRows; i++) {

        for (let j = 0; j < columns; j++) {
            temp[j] = null;
        }
        array[i] = temp;
        temp = [];
    }

    let char = '';
    let tmpArr = [];
    tmpArr = str.split('');

    for (let i = 0; i < blocks; i++) {
        for (let j = 0; j < numRows; j++) {
            char = tmpArr.shift();
            array[j][i * (numRows - 1)] = char;
        }
        for (let j = 0; j < numRows - 2; j++) {
            char = tmpArr.shift();
            array[numRows - 2 - j][i * (numRows - 1) + 1 + j] = char;
        }
    }

    if (left > numRows) {
        for (let j = 0; j < numRows; j++) {
            char = tmpArr.shift();
            array[j][blocks * (numMiddle + 1)] = char;
        }
        for (let j = 0; j < left - numRows; j++) {
            char = tmpArr.shift();
            array[numRows - 2 - j][blocks * (numRows - 1) + 1 + j] = char;
        }
    } else {
        for (let j = 0; j < left; j++) {
            char = tmpArr.shift();
            array[j][blocks * (numMiddle + 1)] = char;
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] != null) {
                result += array[i][j];
            }
        }
    }

    return result;
};

console.log('Test');
console.log(convert("PAYPALISHIRING", 4));

