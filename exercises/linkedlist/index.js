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
    this.insertAt( data, 0 );
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

  getFirst () {
    return this.getAt( 0 );
  }

  getLast () {
    return this.getAt( this.size() - 1 );
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if ( !this.head ) {
      return;
    }

    this.removeAt( 0 );
  }

  removeLast () {
    if ( !this.head ) {
      return;
    }

    this.removeAt( this.size() - 1 );
  }

  insertLast ( Data ) {
    this.insertAt( Data, this.size() );
  }

  getAt ( index ) {
    let count = 0;
    let node = this.head;

    while ( node ) {
      if ( count === index ) {
        return node;
      }

      node = node.next;
      count++;
    }

    return null;
  }

  removeAt ( index ) {
    /*
     cases:
     1) Remove head
     2) Remove node from middle
     3) Remove node from end
     (cases 2 and 3 solved with same code)
     */

    // No nodes in the list
    if ( !this.head ) {
      return;
    }

    // Case 1: Removing head node
    if ( index === 0 ) {
      this.head = this.head.next;
      return;
    }

    // Case 2 & 3: Removing middle or last node
    const previous = this.getAt( index - 1 );

    if ( !( previous && previous.next ) ) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt ( data, index ) {
    // List is empty, insert node at head
    if ( !this.head ) {
      this.head = new Node( data );
      return;
    }

    // Insert node at head when there are already nodes in list
    if ( index === 0 ) {
      this.head = new Node( data, this.head );
      return;
    }

    // Index is beyond bounds, insert node at tail
    if ( index > this.size() ) {
      const lastNode = this.getLast();
      lastNode.next = new Node( data );
      return;
    }

    // Index is in middle of list, insert node between two nodes
    const previous = this.getAt( index - 1 );
    previous.next = new Node( data, previous.next );
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }

    let node = this.getAt(0);

    while(node) {
      fn(node);
      node = node.next;
    }
  }

  // Generator function
  *[Symbol.iterator]() {
    let node = this.head;

    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
