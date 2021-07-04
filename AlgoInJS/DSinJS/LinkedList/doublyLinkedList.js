/*
Doubly linked list(DLL) is a special variation of singly linked list, where a node not only contains reference to the nexT
element but the previous element as well. This helps us to traverse not only in the forward direction but in the backward
direction as well.
We will perform all operations written here with our flavour of code:
https://learnersbucket.com/tutorials/data-structures/doubly-linked-list-implementation-in-javascript/
*/

class DLLNode {
  constructor(element){
    this.prev = null;
    this.element = element;
    this.next = null;
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
     while(currentNode.next) {
       str += `${ currentNode.element }-->`
       currentNode = currentNode.next;
     }
     str+=`${ currentNode.element }`
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
    }
    else {
      this.tail.next = node
      node.prev = this.tail;
      this.tail = node
    }
    this.length++
  }

  /*
  Removes an element from the given position in the list and returns it. Provide the index from 0
  */
 removeAt(index) {
   if(index < 0 || index > this.length) {
     return 'Invalid  Input'
   }
   if( index === 0) {
     this.head = this.head.next;
     this.length--;
     return
   } else if (index === this.length-1) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return;
   } else if(index > 0 && index < this.length-1) {
     let currentNode = this.head;
     let iterator = 0;
     while(iterator < index){
      currentNode = currentNode.next;
      iterator++
     }
     let prevNode = currentNode.prev;
     let nextNode = currentNode.next;
     prevNode.next = nextNode;
     nextNode.prev = prevNode;
     this.length--;
   } else {
     console.log('Check the input, Didnt remove')
   }
 }
}

const dll = new DoublyLinkedList()
dll.append(45)
dll.append(46)
dll.append(47)
dll.append(23)
dll.append(6)
dll.removeAt(3)
dll.displayDoublyLinkedList()
