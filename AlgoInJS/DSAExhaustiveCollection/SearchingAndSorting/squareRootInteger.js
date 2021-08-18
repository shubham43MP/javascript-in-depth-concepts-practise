/**
 * Description
 *
 * T(n) =
 * S(n)
 */

 class Solution {
  squareRootNaive(x) {
    const limit = x / 2
    for (let i = 2; i <= limit; i++) {
      const floorNumber = x / (i*i)
      if(floorNumber === 1) return i
      if(Math.floor(floorNumber) === 0) return i - 1
    }
  }
}


const solution = new Solution()
console.log('Square root naive => ', solution.squareRootNaive(10))
