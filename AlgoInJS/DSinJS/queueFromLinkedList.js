/*
  A FIFO System Implemented with the help of Linked List
*/

const linked = require('./linkedlist')
const LinkedList = linked.LinkedList
const Node = linked.Node

class QueueFromLinkedList {
  constructor(){
    this.queueFromLinkedList = new LinkedList()
  }

  /*
  Enqueues a given element to the queue
  */
  enqueue(element) {
    this.queueFromLinkedList.add(element)
  }

  /*
  Dequeues a given element from the queue
  */
  dequeue() {
    this.queueFromLinkedList.removeFrom(0)
  }

  /*
  Returns thw front element of the queue
  */
  front() {
    return this.queueFromLinkedList.head.element
  }

  /*
  displays the queue
  */
 displayQueue() {
   this.queueFromLinkedList.displayLinkedList()
 }
}

const queue = new QueueFromLinkedList()
queue.enqueue(11)
queue.enqueue(12)
queue.enqueue(14)
queue.displayQueue()
queue.dequeue()
queue.displayQueue()
console.log('Front element is', queue.front())
