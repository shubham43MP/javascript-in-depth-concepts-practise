/*
Doubly linked list(DLL) is a special variation of singly linked list, where a node not only contains reference to the nexT
element but the previous element as well. This helps us to traverse not only in the forward direction but in the backward
direction as well.
We will perform all operations written here with our flavour of code:
https://learnersbucket.com/tutorials/data-structures/doubly-linked-list-implementation-in-javascript/
*/

class Node {
  constructor(element){
    this.prevElementRef = null,
    this.element = element,
    this.nextElementRef = null,
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null, // Head Contains first element
    this.tail = null, // Tail Contains last element
    this.size = 0
  }

  /*
  Adds an element to the end of the DLL
  */
  append(element) {

  }
}
