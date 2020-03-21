// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
        return this
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        let newNode = new Node(data, this.head)
        if (this.head) {
            newNode.next = this.head
        }
        this.head = newNode
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let currentNode = this.head
        if (!currentNode) { return null }
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    size() {
        let counter = 0
        let currentNode = this.head
        while (currentNode) {
            currentNode = currentNode.next
            counter++
        }
        return counter
    }

    clear() {
        let currentNode = this.head
        let nextNode = this.head
        while (nextNode) {
            nextNode = currentNode.next
            currentNode.next = null
        }
        this.head = null
    }

    removeFirst() {
        let nextNode = this.head.next
        this.head = nextNode
    }

    removeLast() {
        let currentNode = this.head
        let prevNode
        if (!currentNode) {return}
        if (!currentNode.next) {this.head = null; return}
        while (currentNode.next) {
            prevNode = currentNode
            currentNode = currentNode.next
        }
        prevNode.next = null
    }

    insertLast(data) {
        let lastNode = this.getLast()
        let newNode = new Node(data)
        if (!lastNode) {
            this.head = newNode
        } else {
            lastNode.next = newNode
        }
    }

    getAt(index) {
        let counter = 0
        let currentNode = this.head
        while (counter < index) {
            if (currentNode === null ) { return null }
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    removeAt(index) {
        if (!this.head) {
            return
        }

        if (index === 0) {
            this.removeFirst()
        }

        let beforeFoundNode = this.getAt(index - 1)
        if (beforeFoundNode.next) {
            let nextNode = beforeFoundNode.next.next
            beforeFoundNode.next = nextNode
        }
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }

        if (index === 0) {
            let newNode = new Node(data)
            newNode.next = this.head
            this.head = newNode
            return
        }

        if (index > this.size()) {
            this.insertLast(data)
            return
        }

        let prevNode = this.getAt(index - 1)
        let newNode = new Node(data)
        newNode.next = this.getAt(index)
        prevNode.next = newNode
    }

    forEach(fn) {
        let currentNode = this.head
        while (currentNode) {
            fn(currentNode)
            currentNode = currentNode.next
        }
    }

    
}

module.exports = { Node, LinkedList };
