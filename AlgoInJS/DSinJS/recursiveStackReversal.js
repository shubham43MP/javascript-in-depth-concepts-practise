const Stack = require('./stack').Stack

const inputStack = new Stack()
inputStack.stackInput([1, 2, 3, 4, 5])

const callStack = new Stack()

inputStack.displayStack()

function insertBottom(inputStack, item) {
  if( inputStack.isEmpty()) return inputStack.push(item)
  const peek = inputStack.peek();
  inputStack.pop()
  insertBottom(inputStack, item);

  // After the recursion unfolds, push each item in the call stack
  // at the peek of the stack
  inputStack.push(peek);

}

function recursiveReversal(inputStack, callStack) {
  if(inputStack.isEmpty()) {
    return
  }
  const peekItem = inputStack.peek()
  callStack.push(peekItem)
  inputStack.pop()
  recursiveReversal(inputStack, callStack)
  insertBottom(inputStack, peekItem)
}

recursiveReversal(inputStack, callStack)
inputStack.displayStack()
