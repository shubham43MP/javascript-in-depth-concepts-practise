/*
  To Implement stack from Priority Queue we will import the classes QueueElement and PriorityQueue from
  priorityQueue.js

  Import export of ES6 doesnt work quite a well with vanilla JS in node hence here we assume that the reader has
  seen the priortyQueue file and take reference from there. If your code doesnt work, copy paste the whole classes
  of QueueElement and PriorityQueue. The idea is to demonstrate Proof of Concept for the stackFromPQ rather than
  solving Nodejs project issues

  Idea Behind this is that we will keep assiging the highest priority to the new added element and in that way we
  can have the LIFO System
*/

import { QueueElement, PriorityQueue } from '../Queue/priorityQueue'

class Stack {
  constructor() {
    this.priorityQueueToStack = new PriorityQueue()
  }
  /*
  Returns length of the stack
  */
  length() {
    return this.priorityQueueToStack.length()
  }

  /*
    Adds an element to the stack
  */
  push(element) {
    return this.priorityQueueToStack.enqueue(element, (-this.length()))
  }

  /*
  Removes the element from stack
  */
  pop(){
    return this.priorityQueueToStack.dequeue()
  }

  /*
  Displays the Stack
  */
  displayStack() {
    this.priorityQueueToStack.displayPriorityQueue()
  }
}

const stack = new Stack()
stack.push(5)
stack.push(6)
stack.push(8)
stack.push(16)
stack.pop()
stack.displayStack()
