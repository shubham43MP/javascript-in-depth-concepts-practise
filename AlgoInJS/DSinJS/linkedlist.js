// Linked Lists Node that contains value and index
class Node {
    // constructor
    constructor(element){
        this.element = element;
        this.next = null
    }
}

class LinkedList {
  constructor(){
    this.head = null; // first node of list
    this.size = 0; // number of nodes in list
  }
  /*
    Adds an element in the end
  */
  add(element) {
    // creates a new node
    const node = new Node(element);

    // to store current node
    let current;

    if (this.head === null) {
      this.head = node
    }
    else {
      current = this.head
      // iterate till the end of list
      while(current.next) {
        current = this.next
      }
      current.next = node
    }
    this.size = this.size + 1
  }

  /*
    Returns Size of the instantiated linked list
  */
  length() {
    return this.size
  }

  /*
   Inserts the element at given index
  */
  insertAt(element, index){
    if(this.length < 0 && index > this.length){
      throw new Error('What the hell input your giving? Fuck off')
    } else {
      const node = new Node(element)
      if (index === 0) {
        node.next = this.head;
        this.head = node
      } else {
        let prevNode, currentNode;
        let iterator = 0;
        currentNode = this.head
        while(iterator < index) {
          iterator++
          prevNode = currentNode
          currentNode = currentNode.next
        }
        node.next = currentNode
        prevNode.next = node
      }
      this.size++
    }
  }

  /*
   Removes the element from given index
  */
  removeFrom(index){
    if(this.length < 0 && index > this.length){
      throw new Error('What the hell input your giving? Fuck off')
    } else {
      let prevNode;
      let iterator = 0
      let currentNode = this.head
      if(index === 0){
        this.head = currentNode.next
      } else {
        while (iterator < index ) {
          iterator++
          prevNode = currentNode
          currentNode = currentNode.next
        }
        prevNode.next = currentNode.next
      }
      this.size--
    }
  }  

  /*
  Removes the given element from the linked list
  */
  removeElement(element) {
    let currentNode = this.head
    let prevNode = null;
    let elementFound = false
    while(currentNode !== null ) {
      if(currentNode.element === element) {
        if(prevNode === null) {
          this.head = currentNode.next
        } else {
          prevNode.next = currentNode.next
        }
        elementFound = true;
        this.size--;
        return element;
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }
    if(!elementFound) return -1
  }

  /*
  Print data of linked list
  */
  displayLinkedList() {
    if(this.size > 0) {
    let curr = this.head;
    while (curr) {
      console.log(curr.element)
      curr = curr.next;
    }
    }
  }

  /*
  Returns index of given element if exists else -1
  */
 indexOf(element) {
  let currentNode = this.head;
  let prevNode = null;
  let iterator = 0;
  while(currentNode !== null ){
    if(currentNode.element === element){
      return iterator
    }
    currentNode = currentNode.next
    iterator++
  }
  return -1
 }
 /*
 Returns true if the list is empty
 */
isEmpty() {
  return this.size == 0
}
}



// Test Cases
const ll = new LinkedList();
ll.add(15)
ll.add(20)
ll.insertAt(13, 1)
ll.insertAt(54, 3)
// ll.displayLinkedList()
// ll.removeFrom(3)
ll.removeElement(20)
ll.displayLinkedList()
console.log(ll.indexOf(28))
