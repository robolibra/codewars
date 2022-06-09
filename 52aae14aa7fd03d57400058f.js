// https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript
/* Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
 */


document.querySelector('.btn').addEventListener('click', () => {
    console.log('Starting....');

    let array = [7, 0, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

    let counter = 0;
    let limitIndex = array.length - 1;

    while (counter <= limitIndex) {
        if (array[counter] === 0 || array[counter] === "0") {
            deleteArrayElement(array, counter);
            limitIndex--;
            counter--;
        }
        counter++;
    }
    console.log(array);

    function deleteArrayElement(arr, index) {
        let tmp = arr[index];
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = 0;
    }

    console.log('Done!');
})

//clever
function removeZeros(array) {
    const head = []
    const tail = []
    for (const e of array) {
        if (e === 0 || e === "0") {
            tail[tail.length] = e
        } else {
            head[head.length] = e
        }
    }
    return [...head, ...tail]
}