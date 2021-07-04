/*
In This special kind of stack, we will also support an operation of minimum element with constant Time
*/

class StackWithMinElement {
  constructor() {
    this.mainStack = []
    this.minTrackerAuxStack = []
  }

  /*
  Returns true if stack is empty
  */
  isEmpty() {
   return this.mainStack.length === 0
  }

  /*
  Adds an element to the stack
  */
  push(element) {
    if(this.isEmpty()) this.minTrackerAuxStack.push(element)
    else {
      // PUsh here in aux stack only if current top se chota ho to
      if( element < this.minimumElement()) this.minTrackerAuxStack.push(element)
    }
    this.mainStack.push(element)
  }

  /*
    Removes an element from Stack from the end of course
  */
  pop(){
    if(this.mainStack.length === 0) return 'Underflow'
    if(this.peek() === this.minimumElement()) this.minTrackerAuxStack.pop()
    this.mainStack.pop()
  }

  /*
  Returns the topmost element  of the Stack without deleting
  */
  peek(){
    return this.mainStack[this.mainStack.length - 1]
  }

  /*
  Method that finds out the minimum value in stack
  */
  minimumElement() {
    return this.minTrackerAuxStack[this.minTrackerAuxStack.length - 1]
  }

  /*
  Prints the Stack from Top to Bottom
  */
  displayStack() {
    for(let iterator = this.mainStack.length - 1; iterator >= 0; iterator--) {
      console.log(this.mainStack[iterator])
    }
  }
}

const stack = new StackWithMinElement()
stack.push(6)
stack.push(7)
stack.push(8)
stack.push(5)
stack.push(3)
stack.pop()
stack.push(10)
stack.push(2)
stack.displayStack()
console.log('Minimum', stack.minimumElement())
