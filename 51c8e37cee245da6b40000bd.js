//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/solutions/javascript

let markers = ["@", "-"];

let string = "Q @b\nu\ne -e f g";
let strings = string.split("\n");

for (let i = 0; i < strings.length; i++) {

    for (let j = 0; j < markers.length; j++) {
        if (strings[i].includes(markers[j])) {
            strings[i] = strings[i].slice(0, strings[i].indexOf(markers[j]));
        }
    }
    console.log(strings[i]);
}


function solution(input, markers) {
    return input.split('\n').map(
        line => markers.reduce(
            (line, marker) => line.split(marker)[0].trim(), line
        )
    ).join('\n')
}