/**
 * Fibonacci by Recursion
 *
 */

 class Solution {
  fibonacci(n) {

    // Base Case
    if( n === 1 ) return 0

    if( n === 2 ) return 1

    // Nth case
    return this.fibonacci(n - 1) + this.fibonacci(n - 2)
  }
}


const solution = new Solution()
const result = solution.fibonacci(9)
console.log('Fibonacci ', result)
