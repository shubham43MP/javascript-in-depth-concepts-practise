const Stack = require('./stack').Stack

const testArray = [2, 5, 1, 8 , 9]
const stack = new Stack()
stack.stackInput(testArray)
let resultArray = []
stack.displayStack()
while(!stack.isEmpty()) {
  resultArray.push(stack.peek())
  stack.pop()
}

console.log('resultArray', resultArray)
