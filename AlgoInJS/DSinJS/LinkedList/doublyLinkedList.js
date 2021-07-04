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
  Removes an element from the given position in the list and returns it. Provide the position from 1
  */
 removeAt(position) {
   if(position < 1 || position > this.length) {
     return 'Invalid  Input'
   }
   if( position === 1) {
     this.head = this.head.next;
     this.length--;
     return
   } else if (position === this.length) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return;
   } else if(position > 1 && position < this.length) {
     let currentNode = this.head;
     let iterator = 0;
     while(iterator < position){
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

  /*
  Adds an element at the given position in the list. Position starts from 1
  */
  insert(element, position) {
    if(position < 1 || position > this.length) {
      return 'Invalid  Input'
    }
    let node = new DLLNode(element)
    // Insert at start
    if(position === 1) {
      let currentNode = this.head;
      node.next = currentNode;
      currentNode.prev = node;
      this.head = node;
      this.length++;
    } else if ( position === this.length) {
      this.append(element)
      this.length++;
    } else if ( position > 1 && position < this.length ) {
      let currentNode = this.head;
      let iterator = 0;
      let prevNode;
      while(iterator < position -1){
        prevNode = currentNode;
        currentNode = currentNode.next;
        iterator++;
      }
      node.next = currentNode;
      node.prev = prevNode;
      currentNode.prev = node;
      prevNode.next = node;
      this.length++;
    } else {
     console.log('Check the input,Insert Failed')
   }
  }

  /*
  Converts the linked list to the array and returns it
  */
  toArray() {
    let currentNode = this.head;
    let iterator = 0;
    const result= []
    while(iterator < this.length) {
      result.push(currentNode.element)
      currentNode = currentNode.next;
      iterator++
    }
    return result
  }

  /*
  Returns the position of the given element in the list. 1 means the first element. Returns -1
  if not found
  */
 indexOf(element){
  let currentNode = this.head;
  let iterator = 1;
  while(iterator <= this.length) {
    if(currentNode.element === element) {
      return iterator
      break;
    }
    currentNode = currentNode.next;
    iterator++
  }
  return -1
 }
}

const dll = new DoublyLinkedList()
dll.append(45)
dll.append(46)
dll.append(47)
dll.append(23)
dll.append(6)
dll.insert(42, 3)
dll.insert(54,4)
dll.removeAt(4)
console.log('Array is ', dll.toArray())
dll.displayDoublyLinkedList()
console.log('Index of 23 is ', dll.indexOf(23))
