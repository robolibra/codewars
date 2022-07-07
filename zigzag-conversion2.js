let convert = function (str, numRows) {
    // rows
    let numMiddle = 0;
    if (numRows > 1) { numMiddle = numRows - 2 };
    let blocks = 1;
    if (str.length > numRows) {
        blocks = blocks + Math.trunc(str.length / (numRows + numMiddle));
    }
    let columns = blocks * (numMiddle + 1);
    let left = str.length - blocks * (numRows + numMiddle);

    if (Math.trunc(left / numRows) > 0) {
        columns += Math.trunc(left / numRows) + left - numRows;
    } else if (left != 0) { columns++ }

    let temp = '';

    for (let i = 0; i < blocks; i++) {
        if (str[i * (numRows + numMiddle)] != undefined) {
            temp += str[i * (numRows + numMiddle)];
        }
    }

    for (let j = 0; j < numMiddle; j++) {
        for (let i = 0; i < blocks + 1; i++) {
            if (str[(numRows + numMiddle) * i + 1 + j] != undefined) {
                temp += str[(numRows + numMiddle) * i + 1 + j];
            }
            if (str[(numRows + numMiddle) * i + numRows + numMiddle - 1 - j] != undefined) {
                temp += str[(numRows + numMiddle) * i + numRows + numMiddle - 1 - j];
            }
        }
    }

    if (numRows > 1) {
        for (let i = 0; i < blocks; i++) {
            if (str[i * (numRows + numMiddle) + numRows - 1] != undefined) {
                temp += str[i * (numRows + numMiddle) + numRows - 1];
            }
        }
    }
    console.log(temp)
}

convert("A", 1);