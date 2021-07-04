const Stack = require('./stack').Stack

const testBalancedExpression = '{()}[)'

const stack = new Stack()

function checkBalanced(testBalancedExpression) {
  const openeningBraces = ['(', '{', '[']
  const closingBraces = [')', '}', ']']
  const bracesMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let iterator = 0; iterator < testBalancedExpression.length; iterator++) {
    let currentChar =  testBalancedExpression[iterator]
    if(openeningBraces.includes(currentChar)) stack.push(currentChar)
    else if(closingBraces.includes(currentChar)) {
      if(stack.isEmpty()) return false
      console.log('GETTING',bracesMap[stack.peek()] )
      if(bracesMap[stack.peek()] !== currentChar) return false
      stack.pop()
    }
  }
  return true
}

console.log('Test expression balanced?? ', checkBalanced(testBalancedExpression))
