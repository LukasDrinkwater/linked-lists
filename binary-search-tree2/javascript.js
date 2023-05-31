class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let testArray = [1, 1, 3, 6, 10, 5, 66, 43, 33, 33, 57, 12, 80, 100];
// let testTree = buildTree(testArray);
// console.log(testTree);

// binary search tree. I.e the top of the tree
class BST {
  constructor() {
    this.root = null;
  }
  // inOrder traveral if node is null - nothing, else recursively call the
  // function on node.left then do something on
  inOrder() {
    let node = this.root;
    const nodes = [];
    if (node) {
      inOrder(node.left);
      nodes.push(node.value);
      inOrder(node.right);
      //make it do something to each node?
    }
    return nodes; //or do make it do something to each nodes
    // or if no parameter is given just output the array
  }
}

function buildTree(array) {
  treeName = new BST();
  let sortedArray = mergeSort(array);
  sortedArray = [...new Set(array)];

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
