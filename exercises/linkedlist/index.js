// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor ( Data, Node = null ) {
    this.data = Data;
    this.next = Node;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst ( data ) {
    this.head = new Node( data, this.head );
  }

  size () {
    let count = 0;
    let currentNode = this.head;

    while ( currentNode ) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }
}

module.exports = { Node, LinkedList };
