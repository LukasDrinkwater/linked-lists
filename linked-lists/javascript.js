class Node {
  constructor(data = {}, nextNode = null, prevNode = null) {
    this.data = data;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
}

// append(data) {
// create a reference to the head.
// loop so long as that reference has a .next property that is not null
//  **and update the reference to that .next property each time**
// eventually, you end up with a Node that has a .next===null
//  at that point, set the .next to new Node(data), creating a new
//  last node.
// }

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let node = this.head;
    if (node === null) {
      this.head = new Node(data);
    } else {
      // if we're here, then node was *not* null - it's implied.
      while (node.nextNode) {
        node = node.nextNode;
      }
      node.nextNode = new Node(data);
      node.nextNode.prevNode = node; //updates the new nodes .nextNode
      //to be the previous node.
    }
  }
  prepend(data) {
    let node = this.head;
    if (node === null) {
      this.head = new Node(data);
    } else {
      this.head = new Node(data); //sets the new node to this.head/start of the
      // list
      node.prevNode = this.head; //set the old head .prevNode to the new node
      this.head.nextNode = node; //node is still the this.head from the start
      // so it updates the new this.head nextNode and sets it to the previous
      // head
    }
  }
  size() {
    let node = this.head;
    let count = 0;
    while (node.nextNode) {
      node = node.nextNode;
      // console.log(node);
      count += 1;
    }
    return count;
  }
  showHead() {
    let node = this.head;
    return node;
  }
  showTail() {
    let node = this.head;
    while (node.nextNode) {
      node = node.nextNode;
    }
    return node;
  }
  atIndex(index) {
    let node = this.head;
    let count = 0;
    while (node.nextNode) {
      //loops through when nextNode is true and if the
      // count and index dont match up it moves to the next node.
      if (count === index) {
        return node;
      }
      node = node.nextNode;
      count += 1;
    }
  }
  pop() {
    let node = this.head;
    if (node.nextNode === null) {
      this.head = null;
    } else {
      while (node.nextNode) {
        // loops through until .nextNode is blank
        node = node.nextNode;
      }
      // when nextNode is blank i sets the current node .prevNode null
      // and the node itself to null
      node.prevNode = null;
      node = null;
    }
    return console.log("Tail node removed");
  }
  contains(value) {
    let node = this.head;
    console.log(node, node.nextNode);
    // if (node == null) {
    //   return console.log("List is empty");
    // }
    while (node) {
      console.log(value);
      console.log(node.data);
      if (node.data.name === value) {
        return console.log(true);
      }
      node = node.nextNode;
    }
  }
  find(value) {
    let node = this.head;
  }
}

const list = new LinkedList();

list.append({ name: "foo", age: 25 });
list.append({ name: "bar", age: 30 });
list.prepend({ name: "roo", age: 35 });

console.log(list.contains("roo"));

// console.log(list);

// append(data) {
//     const node = this.head;
//     // console.log(this);
//     if (node === null) {
//       this.head = new Node(data);
//     } else if (node != null) {
//       while (node) {
//         // console.log(node.data.name);

//         const searchList = function (node) {
//           let previousNode = node;
//           console.log(previousNode.data.name);
//           if (node.nextNode === null) {
//             node.nextNode = new Node(data);
//           } else if (node.nextNode === null && previousNode.nextNode === null) {
//             node.nextNode = new Node(data);
//             previousNode.nextNode = node;
//           }
//         };
//         return searchList(node);
//       }
//     }
//   }
