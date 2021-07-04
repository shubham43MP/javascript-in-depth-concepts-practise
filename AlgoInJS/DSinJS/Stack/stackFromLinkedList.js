const linked = require('./linkedlist')
const LinkedList = linked.LinkedList
const Node = linked.Node

class Stack {
  constructor() {
    this.linkedListToStack = new LinkedList()
  }

  /*
  Adds new element to stack
  */
  push(element) {
    this.linkedListToStack.add(element)
  }

  /*
  Removes or pops element stack
  */
  pop() {
    this.linkedListToStack.removeFrom(this.linkedListToStack.size-1)
  }

  /*
  Displays the stack
  */
  displayStack() {
    this.linkedListToStack.displayLinkedList()
  }
}

const stack = new Stack()
console.log('Bottom Line')
stack.push(4)
stack.push(5)
stack.push(6)
stack.displayStack()
stack.pop()
stack.displayStack()
