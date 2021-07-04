// Queue is a Linear DS that behaves in a way called as First In First Out (FIFO)

class Queue {
  constructor(){
    this.items = [];
  }

  /*
  Adds element to the queue
  */
  enqueue(element) {
    this.items.push(element)
  }

  /*
  Remove element from the the queue
  */
  dequeue(){
   if(this.items.length) return 'Underflow'
   return this.items.shift()
  }

  /*
  Returns true if stack is empty
  */
  isEmpty() {
   return this.items.length === 0 
  }

 /*
 Returns front element of the queue
 */
  front(){
    if(this.isEmpty()){
      return 'Underflow'
    }
    return this.items[0]
  }

  /*
  Print all elements of the queue
  */
 displayQueue() {
   this.items.forEach(item => console.log(item))
 }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(8)
queue.displayQueue()
console.log(queue.front())