// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require( "./stack" );

class Queue {
  constructor () {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add ( record ) {
    this.firstStack.push(record);
  }

  remove () {
    this.flipStack(this.firstStack, this.secondStack);

    const record = this.secondStack.pop();

    this.flipStack(this.secondStack, this.firstStack);

    return record;
  }

  peek () {
    this.flipStack(this.firstStack, this.secondStack);

    const record = this.secondStack.peek();

    this.flipStack(this.secondStack, this.firstStack);

    return record;
  }

  flipStack(a, b) {
    while (a.peek()) {
      b.push(a.pop());
    }
  }
}

module.exports = Queue;
