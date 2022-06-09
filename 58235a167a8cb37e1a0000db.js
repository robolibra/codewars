// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

/* Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
 */

document.querySelector('.btn').addEventListener('click', () => {
    console.log('Starting....');

    //Code here!

    let input = ["red", "green", "red", "blue", "blue"];
    let result = 0;

    let unique = input.filter((element, index, array) => {
        if (index === array.indexOf(element)) return element;
    });

    for (un of unique) {
        let count = 0;
        for (el of input) {
            if (el === un) count++;
        }
        result += Math.trunc(count / 2);
    }

    console.log(result);

    console.log('Done!');
})