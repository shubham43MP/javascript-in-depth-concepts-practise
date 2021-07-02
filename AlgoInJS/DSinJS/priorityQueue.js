/*
  A Priority queue is a special kind of queue where its elements are added and removed according to the priority. Important elements will be removed last while non priority elements will be removed first

  To Implement the priority Queue, we will add the elements based on priority and then remove them from the front of the queue. Elements with highest priority will be added in front and least priority in back side

  Priority from High to low goes as 1, 2, 3, 4.... where 1 is the highest priority and 4 is the lease
  Highest Priority Element will be removed first
*/

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  /*
   Returns true is the PriorityQueue is Empty
  */
  isEmpty() {
    return this.length() === 0
  }

  /*
   Returns length of the priority queue
  */
  length() {
    return this.items.length
  }

  /*
   Display Queue points with priority
  */
  displayPriorityQueue() {
    this.items.forEach(item => console.log(item))
  }

  /*
   Add the element in the Queue based on priority
  */
  enqueue(element, priority) {
    const pQueueElement = new QueueElement(element, priority)
    let insertedInBetween = false
    for(let iterator = 0; iterator < this.length(); iterator++) {
      const currentElement = this.items[iterator]
      if(pQueueElement.priority < currentElement.priority){
        this.items.splice(iterator, 0, pQueueElement)
        insertedInBetween = true
        break;
      }
    }
    if(!insertedInBetween) this.items.push(pQueueElement)
  }

  /*
   Removes the element from the queue
  */
  dequeue(){
    if(this.isEmpty()) return 'Underflow'
    return this.items.shift()

  }

  /*
   Returns the front element from the queue
  */
  front() {
    if(this.isEmpty()) return 'Underflow'
    return this.items[0]
  }

  /*
   Returns the last element from the queue
  */
  rear() {
    if(this.isEmpty()) return 'Underflow'
    return this.items[this.length - 1]
  }
}

const pq = new PriorityQueue()
pq.enqueue(4, 1)
pq.enqueue(3, 2)
pq.enqueue(7, 1)
pq.dequeue()
console.log('Front element is ', pq.front())
pq.displayPriorityQueue()
