// Stack is a Linear DS that behaves in a way called as Last In First Out (LIFO)

class Stack {
  constructor(){
    this.items = []
  }
  /*
  Adds data to the end of the Stack
  */
  push(item) {
    this.items.push(item)
  }

  /*
  Removes an element from Stack from the end of course
  */
  pop(){
    if(this.items.length === 0) return 'Underflow'
    return this.items.pop()
  }

  /*
  Returns the topmost element  of the Stack without deleting
  */
  peek(){
    return this.items[this.items.length - 1]
  }

  /*
  Returns true if stack is empty
  */
  isEmpty() {
   return this.items.length === 0 
  }

  /*
  Prints the Stack from Top to Bottom
  */
  displayStack() {
    for(let iterator = this.items.length - 1; iterator >= 0; iterator--) {
      console.log(this.items[iterator])
    }
  }
}

const stack = new Stack()
stack.push(5)
stack.push(8)
stack.displayStack()