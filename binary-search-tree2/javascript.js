const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function printNodes(node) {
  return console.log(node);
}

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// binary search tree. I.e the top of the tree
class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);

      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return nulll;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == nulll) {
          return null;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  levelOrder(node = this.root, externalFunction) {
    let nodeQueue = [node];
    // console.log(nodeQueue);
    const outputArray = [node.data];

    while (nodeQueue.length != 0) {
      let handleNode = nodeQueue.shift();
      console.log(nodeQueue);
      console.log(handleNode.data);
      console.log(outputArray);
      if (arguments.length >= 2) {
        externalFunction(handleNode.value);
      }
      if (handleNode.left != null) {
        nodeQueue.push(handleNode.left);
        outputArray.push(handleNode.left.data);
      }
      if (handleNode.right != null) {
        nodeQueue.push(handleNode.right);
        outputArray.push(handleNode.right.data);
      }
      // console.log(nodeRef.data);
    }
    if (arguments.length === 1 || arguments.length === 0) {
      return outputArray;
    }
  }
  // inOrder traveral if node is null - nothing, else recursively call the
  // function on node.left then do something on
  inOrder(node = this.root, externalFunction) {
    // console.log(this);
    // let node = this.root;
    // node = this.root;
    const nodes = [];
    if (node) {
      // this.inOrder(node.left);
      if (arguments.length >= 2) {
        externalFunction(node);
      }
      this.inOrder(node.left, externalFunction);
      nodes.push(node.value);
      this.inOrder(node.right, externalFunction);
      //make it do something to each node?
    }
    return nodes;
  }
  postOrder(node = this.root, externalFunction) {
    const nodes = [];
    if (node) {
      // this.inOrder(node.left);
      if (arguments.length >= 2) {
        externalFunction(node);
      }
      this.postOrder(node.left, externalFunction);
      this.postOrder(node.right, externalFunction);
      nodes.push(node.value);
    }
    return nodes;
  }
  preOrder(node = this.root, externalFunction) {
    const nodes = [];
    if (node) {
      // this.inOrder(node.left);
      if (arguments.length >= 2) {
        externalFunction(node);
      }
      nodes.push(node.value);
      this.preOrder(node.left, externalFunction);
      this.preOrder(node.right, externalFunction);
    }
    return nodes;
  }
  height(node = this.root) {
    let heightNum = 0;

    const getHeight = function (node) {
      if (node == null) {
        return 0;
      } else {
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);

        if (leftHeight > rightHeight) {
          return leftHeight + 1;
        } else {
          return rightHeight + 1;
        }
      }
    };
    return getHeight(node);
  }
  depth(node = this.root) {
    if (!node) return 0;
    //return the max value from the recursive function
    return Math.max(this.depth(node.left), this.depth(node.right)) + 1;
  }
  isBalanced() {
    let node = this.root;

    if (node == null) return true;

    let leftHalf = this.height(node.left);
    let rightHalf = this.height(node.right);

    console.log(leftHalf, rightHalf);
    if (Math.abs(leftHalf - rightHalf) <= 1) {
      return true;
    } else return false;
  }
}

function buildTree(array, treeName) {
  let newTree = treeName;
  newTree = new Tree();
  array = [...new Set(array)];
  for (let i = 0; i < array.length; i++) {
    newTree.insert(array[i]);
  }
  return newTree;
}

let testArray = [40, 11, 54, 15, 7, 47, 100, 99, 1, 1, 3, 3, 76, 20];
let testArray2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 6675, 7356];
// let sortedTestArray = mergeSort(testArray);
mergeSort(testArray);
console.log(testArray);
// console.log(mergeSort(testArray));
let testTree = buildTree(testArray, "testTree");
// let testNode = testTree.find(7);
console.log(prettyPrint(testTree.root));

//
//
//
//

// notes
//
//
//

//javascript-help-0 https://discord.com/channels/505093832157691914/690590001486102589/1114643306085896314
// Okay, let me show you something
// doThing(node) {
//   if (!node) return;
//   nodeQueue.push(node);
//   outputArray.push(node.data);
// }

// levelOrder(node = this.root, externalFunction) {
//   // ...other code
//   doThing(nodeRef.left);
//   doThing(nodeRef.right);
// }
// or even better...
// doThings(...nodes) {
//   nodes.forEach(node => doThing(node));
// }

// then you could do:
// levelOrder() {
//   // ...rest
//   doThings(nodeRef.left, nodeRef.right);
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
// MERGE SORT FUNCTIONS
//
//
//
//
//

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  console.log("array", array);
  // return merge(mergeSort(left), mergeSort(array));
  return merge(mergeSort(left), mergeSort(array));
}

function merge(left, right) {
  let array = [];

  // Break out of loop if any array is empty
  while (left.length && right.length) {
    // Pick the smallest from the left and right sub arrays
    if (left[0] < right[0]) {
      // shift removed the first element from the array.
      // so it pushes the element at index 0 then shifts is from the array.
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  // Concatenating the leftover elements because they are already sorted.
  // (in case we didn't go through the entire left or right array)
  console.log([...array, ...left, ...right]);
  return [...array, ...left, ...right];
}

// function mergeSort(array) {
//   const half = array.length / 2;

//   // Base case or terminating case
//   if (array.length < 2) {
//     return array;
//   }

//   const left = array.splice(0, half);
//   return merge(mergeSort(left), mergeSort(array));
// }

// function merge(left, right) {
//   let arr = [];
//   // Break out of loop if any one of the array gets empty
//   while (left.length && right.length) {
//     // Pick the smaller among the smallest element of left and right sub arrays
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }

//   // Concatenating the leftover elements
//   // (in case we didn't go through the entire left or right array)
//   return [...arr, ...left, ...right];
// }
