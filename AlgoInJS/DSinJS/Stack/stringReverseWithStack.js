const Stack = require('./stack').Stack

const testString = 'Shubham Dixit'
const stack = new Stack()

for(let iterator = 0; iterator < testString.length; iterator++) {
  stack.push(testString[iterator])
}

let result = ''

for(let iterator = 0; iterator < testString.length; iterator++) {
  result += stack.peek()
  stack.pop()
}
console.log('Result', result)
