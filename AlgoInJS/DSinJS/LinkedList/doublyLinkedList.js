/*
Doubly linked list(DLL) is a special variation of singly linked list, where a node not only contains reference to the nexT
element but the previous element as well. This helps us to traverse not only in the forward direction but in the backward
direction as well.
We will perform all operations written here with our flavour of code:
https://learnersbucket.com/tutorials/data-structures/doubly-linked-list-implementation-in-javascript/
*/

class DLLNode {
  constructor(element){
    this.prevElementRef = null;
    this.element = element;
    this.nextElementRef = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null, // Head Contains first element
    this.tail = null, // Tail Contains last element
    this.length = 0
  }

  /*
  Displays a Doubly Linked list in specified direction
  */
 displayDoublyLinkedList() {
   if(this.length > 0) {
     let currentNode = this.head
     let str = ''
     while(currentNode.nextElementRef !== null) {
      str += `${ currentNode.element }-->`
      currentNode = currentNode.nextElementRef;
     }
     console.log(str)
   } else {
     console.log('Linked list is empty')
   }
 }

  /*
  Adds an element to the end of the DLL
  */
  append(element) {
    const node = new DLLNode(element)
    if(this.length === 0) {
      this.head = node;
      this.tail = node;
      console.log(this.head)
    }
    else {
      this.tail.next = node
      node.prevElementRef = this.tail;
      this.tail = node
    }
    this.length++
  }
}

const dll = new DoublyLinkedList()
dll.append(45)
dll.append(46)
dll.append(47)
dll.displayDoublyLinkedList()
