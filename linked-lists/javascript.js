class Node {
  constructor(data = {}, nextNode = null, prevNode = null) {
    this.data = data;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
}

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
    while (node) {
      //maps each node object to a string array
      const entries = Object.entries(node.data);
      const mappedEntries = entries.map(([key, value]) => `${key}: ${value}`);
      // console.log(mappedEntries);

      for (let entry of mappedEntries) {
        if (entry.includes(value)) {
          return true;
        }
      }
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    let node = this.head;
    let count = 0;
    while (node) {
      //maps each node object to a string array
      const entries = Object.entries(node.data);
      const mappedEntries = entries.map(([key, value]) => `${key}: ${value}`);
      // console.log(mappedEntries);

      for (let entry of mappedEntries) {
        if (entry.includes(value)) {
          return console.log(`Its at node: ${count}`);
        }
      }
      count += 1;
      node = node.nextNode;
    }
    return null;
  }
  toString() {
    let node = this.head;
    let stringOutput = "";
    while (node) {
      //maps each node object to a string array
      const entries = Object.entries(node.data);
      const mappedEntries = entries.map(([key, value]) => `${key}: ${value}`);
      // if (node.nextNode === null) return;
      console.log(mappedEntries);
      let stringToAdd = ` ${mappedEntries[0]}, ${mappedEntries[1]}  -> `;
      stringOutput += stringToAdd;
      node = node.nextNode;
    }
    stringOutput += null;
    return stringOutput;
  }
}

const list = new LinkedList();

list.append({ name: "foo", age: 25 });
list.append({ name: "bar", age: 30 });
list.prepend({ name: "roo", age: 35 });

console.log(list.toString());

// Three methods to convert objects into arrays
// Object.keys() converts property names into array
// Object.values()  covnerts property values into array
// Object.entries() converts both

// // map method
// const newResult = result.map((item) => {
//   const [xx, xx] = item;
//   return xx, xx;
// });

// // for of method
// for (const [xx, xx] of result) {
//   console.log(xx, xx);
// }
