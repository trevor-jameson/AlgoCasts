// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// Original attempt
// function midpoint(list) {
//     const clonedList = Object.assign( Object.create( Object.getPrototypeOf(list)), list)
//     let frontNode = clonedList.getFirst()
//     let backNode = clonedList.getLast()
//     while (!frontNode && !backNode) {
//         if (frontNode === backNode) { return frontNode }
//         frontNode = clonedList.getFirst()
//         backNode = clonedList.getLast()
//         clonedList.removeFirst()
//         clonedList.removeLast()
//     }
//     if (!backNode) { return frontNode }
//     if (!frontNode) { return backNode}
// }

function midpoint(list) {
    let slow = list.head
    let fast = list.head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

module.exports = midpoint;
