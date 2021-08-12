/**
 * Factorial by Recursion
 *
 */

 class Solution {
  factorial(input) {

    // Base Case
    if( input === 1 ) return 1

    // Case for Nth
    let fact = input * this.factorial(input - 1)

    // Returning the final value
    return fact
  }
}


const solution = new Solution()
const factorial = solution.factorial(2)
console.log('Factorial is ', factorial)
