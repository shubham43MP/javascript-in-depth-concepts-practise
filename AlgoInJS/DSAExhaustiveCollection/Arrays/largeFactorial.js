/**
 * Given an integer N, find its factorial. Note that the input can be as large as 1000
 */


/**
 * 
 * @param {String} num1 
 * @param {String} num2 
 * 
 * @returns
 * Sum of two numbers given in String format. Helps calculating big sums.
 */
function add(num1, num2) {
  // num1 should be greater than num2
  if (num1.length < num2.length) {
    const temp = num1
    num1 = num2
    num2 = temp
  }
  let sum = []
  let carry = 0
  for (let index = 0; index < num1.length; index++) {
    const a = parseInt(num1[num1.length - 1 - index], 10)
    const b = parseInt(num2[num2.length - 1 - index], 10) || 0
    const digitSum = a+b+carry
    if ( digitSum >= 10 ) carry = Math.floor(digitSum / 10)
    else carry = 0
    const tempSum = (digitSum).toString()
    sum.push(tempSum[tempSum.length -1])
  }
  if( carry === 0 ) return sum.reverse().join('')
  else { 
    sum.push(carry)
    return sum.reverse().join('')
   }
  
}

/**
 * 
 * @param {String} num1 
 * @param {String} num2 
 * @returns {String}
 * 
 * Multiplication of two numbers
 */
function largeMultiply(num1, num2) {
  const limit = parseInt(num2, 10)
  let multiplication = num1
  for (let index = 0; index < limit - 1; index++) {
    const sum = add(num1, multiplication)
    multiplication = sum
  }
  return multiplication
}

/**
 * 
 * @param {Number} N 
 * @returns 
 * Factorial even if the value is too large
 */
function largeFactorial(N) {
  factorial = 1
  let i = 1
  while (i !== N + 1) {
    if(typeof(factorial) === 'number' && factorial < Number.MAX_SAFE_INTEGER) factorial *= i
    else {
      if(typeof(factorial) === 'number') factorial = factorial.toString()
      factorial = largeMultiply(factorial, i.toString())
    }
    i++
  }
  return factorial.toString()
}

console.log('Multiplication is ', largeFactorial(21))