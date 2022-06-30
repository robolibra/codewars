
//https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
/* You are given a binary tree:

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}
Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

Return empty array if root is null.

Example 1 - following tree:

                 2
            8        9
          1  3     4   5
Should return following list:

[2,8,9,1,3,4,5]
Example 2 - following tree:

                 1
            8        4
              3        5
                         7
Should return following list:

[1,8,4,3,5,7] */

document.querySelector('.btn').addEventListener('click', () => {
    console.log('Starting....');

    class Node {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }

    const treeOne =
        new Node(2,
            new Node(8,
                new Node(1),
                new Node(3)
            ),
            new Node(9,
                new Node(4),
                new Node(5)
            )
        );

    const treeTwo =
        new Node(11,
            new Node(3,
                new Node(8,
                    new Node(43,
                        new Node(17)
                    ),
                    new Node(46)
                ),
                new Node(20,
                    new Node(29),
                    new Node(45)
                )
            )
        );


    let stringArray = [];
    let resultArray = [];

    getNode(treeTwo, 0);

    function getNode(node = null, level) {
        let tmp;
        if (node !== null) {
            tmp = node.value;
            if (stringArray[level] === undefined) stringArray[level] = '';
            stringArray[level] += tmp.toString() + ' ';
            level++;
            if (node.left !== null) getNode(node.left, level);
            if (node.right !== null) getNode(node.right, level);
        } else return;
    }

    stringArray.forEach((element) => {
        element.trim().split(' ').forEach((element) => {
            resultArray.push(parseInt(element));
        })
    })


    console.log(resultArray);

    console.log('Done!');
})

// inversing NodeTree
/* function treeByLevels (rootNode) {
    if(!rootNode) return []
    const nodes = [rootNode]
    const result = []
    while(nodes.length > 0) {
      const node = nodes.shift()
      if(node.left) {
        nodes.push(node.left)
      }
      if(node.right) {
        nodes.push(node.right)
      }
      result.push(node.value)
    }
    return result;
  } */


  //making the Node iterable
/*   function treeByLevels(rootNode) {
    let values = [];
    let nodes = [rootNode];
    for(let i = 0; i<nodes.length; i++)
        if(nodes[i]){
            values.push(nodes[i].value);
            nodes.push(nodes[i].left, nodes[i].right);
        }
    return values;
} */
