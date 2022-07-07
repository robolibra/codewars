let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let str = "aaa";
let strIndex = 0;
let string = str.split('');
let pat = "ab*a*c*a";
let pattern = pat.split('');
let isMatches = true;

while (pattern.length > 0) {
    if (string.length == 0) {
        while (pattern[pattern.length - 1] == '*') {
            if (pattern.length > 1) {
                pattern.pop();
                pattern.pop();
            } else { break }
        }
        if (pattern.length > 0) {
            isMatches = false;
        }
        break;
    }
    if (alphabet.indexOf(pattern[pattern.length - 1]) > 0) {
        // letter
        if (string[string.length - 1] == pattern[pattern.length - 1]) {
            string.pop();
            pattern.pop();
        } else {
            isMatches = false;
            break;
        }

    } else {
        switch (pattern[pattern.length - 1]) {
            case '.': {
                string.pop();
                pattern.pop();
                break;
            }
            case '*': {
                if (pattern.length > 1 && string.length > 0) {
                    pattern.pop();
                    if (pattern[pattern.length - 1] == '.') {
                        string = '';
                        pattern.pop();
                        break;
                    }
                    if (pattern[pattern.length - 1] == '*') {
                        isMatches = false;
                        break;
                    }

                    while (string.length > 0) {
                        if (pattern[pattern.length - 1] == string[string.length - 1]) {
                            string.pop();
                        } else {
                            // pattern.pop();
                            break;
                        }
                    }
                    pattern.pop();
                } else {
                    isMatches = false;
                    break;
                }
                break;
            }
        }
    }
}
if (string.length > 0 || pattern.length > 0) { isMatches = false }

console.log(isMatches);