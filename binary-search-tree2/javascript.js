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
  console.log(node.value);
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
  levelOrder() {}
  // inOrder traveral if node is null - nothing, else recursively call the
  // function on node.left then do something on
  inOrder(node = this.root, externalFunction) {
    // let node = this.root;
    node = this.root;
    const nodes = [];
    if (node) {
      inOrder(node.left);
      if (arguments.length >= 2) {
        externalFunction(node.value);
      }
      nodes.push(node.value);
      inOrder(node.right);
      //make it do something to each node?
    }
    return nodes;
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

let testArray = [40, 11, 54, 15, 7, 47, 100, 99, 1, 1, 3, 3, 76];
// console.log(mergeSort(testArray));
let testTree = buildTree(testArray, "testTree");
// console.log(testTree.root);
console.log(testTree.inOrder(undefined, printNodes));
// console.log(prettyPrint(testTree.root));

//
//
//
//

// notes
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
//
//
//
// MERGE SORT FUNCTIONS
//
//
//
//
//

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
//       // shift removed the first element from the array.
//       // so it pushes the element at index 0 then shifts is from the array.
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }

//   // Concatenating the leftover elements because they are already sorted.
//   // (in case we didn't go through the entire left or right array)
//   return [...arr, ...left, ...right];
// }
