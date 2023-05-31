class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// binary search tree. I.e the top of the tree
class BST {
  constructor() {
    this.root = null;
  }
}

function buildTree(array, treeName) {
  treeName = new BST();
  let sortedArray = [...new Set(array)];

  for (let i = 0; i > length; i++) {
    treeName.insert(sortedArray[i]);
  }
}

// MERGE SORT FUNCTIONS

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      // shift removed the first element from the array.
      // so it pushes the element at index 0 then shifts is from the array.
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements because they are already sorted.
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

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

// notes
//
//
//
