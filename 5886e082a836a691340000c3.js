/* // https://www.codewars.com/kata/5886e082a836a691340000c3/javascript
Task
A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane.Its center(the intersection point of its diagonals) coincides with the point(0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle(including on its sides) ?

    Example
For a = 6 and b = 4, the output should be 23

The following picture illustrates the example, and the 23 points are marked green.



    Input / Output
    [input] integer a

A positive even integer.

    Constraints: 2 ≤ a ≤ 10000.

    [input] integer b

A positive even integer.

    Constraints: 2 ≤ b ≤ 10000.

    [output] an integer

The number of inner points with integer coordinates.

 */

// the algorithm is working

function rectangleRotation(a, b) {
    let rotation = 45; // in grades
    rotation = rotation / 180 * 3.141593; // in radians

    // boxes coordinates
    let xCoor = [-(a / 2), a / 2, a / 2, -(a / 2)];
    let yCoor = [b / 2, b / 2, -(b / 2), -(b / 2)];

    for (let i = 0; i < xCoor.length; i++) {
        x = xCoor[i];
        y = yCoor[i]
        xCoor[i] = x * Math.cos(rotation) - y * Math.sin(rotation);
        yCoor[i] = x * Math.sin(rotation) + y * Math.cos(rotation);
    }

    let minCoor = Math.round(-((a / 2) * Math.cos(rotation) + (b / 2) * Math.sin(rotation)));
    let maxCoor = Math.round((a / 2) * Math.cos(rotation) + (b / 2) * Math.sin(rotation));
    let count = 0;

    for (let i = minCoor; i <= maxCoor; i++) {
        for (let j = minCoor; j <= maxCoor; j++) {
            if (inPoly(i, j)) {
                count++;
            }
        }
    }

    return count;

    function inPoly(x, y) {
        let npol = xCoor.length;
        let j = npol - 1;
        let intersects = false;
        for (let i = 0; i < npol; i++) {
            if ((((yCoor[i] <= y) && (y < yCoor[j])) || ((yCoor[j] <= y) && (y < yCoor[i]))) &&
                (x > (xCoor[j] - xCoor[i]) * (y - yCoor[i]) / (yCoor[j] - yCoor[i]) + xCoor[i])) {
                intersects = !intersects;
            }
            j = i;
        }
        return intersects;
    }

}