/**
 * GP Nth term recursive
 */

 class Solution {

  constructor() {
    this.primeModulo = Math.pow(10, 9) + 7
  }

  nthTermGP(A, R, N) {
    let ans = R
    // Base Case
    if(N === 1 ) return R


    ans *= this.nthTermGP(A, R, N - 1)  % this.primeModulo
    return ans
  }

  finalNthTerm(A, R, N) {
    return A*this.nthTermGP(A, R, N)
  }
}


const solution = new Solution()

const A = 2
const R = 2
const N = 5
const result = solution.finalNthTerm(A, R, N)
console.log('RESULT => ', result)
