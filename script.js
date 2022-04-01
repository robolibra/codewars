// let inStr = '0001100110011001100000011000000111111001100111111001111110000000000000011';
let inStr = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
// let inStr = '001110';
console.log(inStr);

// pos = inStr.indexOf('1');
inStr = inStr.substring(0, inStr.lastIndexOf('1') + 1).substring(inStr.indexOf('1'));
console.log(inStr);


let count0 = 0;
let count1 = 0;
let outStr = '';

for (let i = 0; i < inStr.length; i++) {
    switch (inStr[i]) {
        case '0': {
            count0++;
            if (count1 == 2) {
                outStr += '.';
            }
            if (count1 == 6) {
                outStr += '-';
            }
            count1 = 0;
            break;
        }
        case '1': {
            count1++;
            if (count0 == 6) {
                outStr += ' ';
            }

            if (count0 == 14) {
                outStr += '   ';
            }

            count0 = 0;
        }
    }
}

if (count1 == 2) {
    outStr += '.';
}

if (count1 == 6) {
    outStr += '-';
}

if (count0 == 6) {
    outStr += ' ';
}

if (count0 == 14) {
    outStr += '   ';
}

console.log(outStr);
