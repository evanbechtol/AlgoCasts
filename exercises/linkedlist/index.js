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

  getFirst () {
    return this.head;
  }

  getLast () {
    let node = this.head;

    while ( node && node.next ) {
      node = node.next;
    }

    return node;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if ( !this.head ) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast () {
    if ( !this.head ) {
      return;
    } else if ( this.size() === 1 ) {
      this.head = null;
    } else {
      let node = this.head.next;
      let previous = this.head;

      while ( node.next ) {
        previous = node;
        node = node.next;
      }

      previous.next = null;
    }
  }

  insertLast ( Data ) {
    let last = this.getLast();

    if ( last ) {
      last.next = new Node( Data );
    } else {
      this.head = new Node( Data );
    }
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
}

module.exports = { Node, LinkedList };
