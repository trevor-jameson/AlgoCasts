// --- Directions
// Implement a Queue datastructure using two stacks.
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

const Stack = require('./stack');

class Queue {
    constructor() {
        this.fullStack = new Stack
        this.emptyStack = new Stack
    }

    add(val) {
        this.fullStack.push(val)
    }

    remove() {
        while (this.fullStack.peek()) {
            this.emptyStack.push(this.fullStack.pop())
        }
        const backOfStack = this.emptyStack.pop()
        while(this.emptyStack.peek()) {
            this.fullStack.push(this.emptyStack.pop())
        }
        return backOfStack
    }

    peek() {
        while (this.fullStack.peek()) {
            this.emptyStack.push(this.fullStack.pop())
        }
        const backOfStack = this.emptyStack.peek()
        while(this.emptyStack.peek()) {
            this.fullStack.push(this.emptyStack.pop())
        }
        return backOfStack
    }

    shuffleStack() {
        
    }

}

module.exports = Queue;
