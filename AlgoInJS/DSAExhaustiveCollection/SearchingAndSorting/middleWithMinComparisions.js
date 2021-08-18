/**
 * GFind Middle of 3 with min comparisions
 *
 * T(n) =
 * S(n)
 */

 class Solution {

  /**
   *
   * @param {Number} A
   * @param {Number} B
   * @param {Number} C
   * @returns
   *
   * Returns the middle element
   */
  middleEfficient(A, B, C) {
    let X = A - B
    let Y = B - C
    let Z = A - C
    if(X*Y > 0) return B
    else if(X * Z > 0) return C
    return A
  }
}


const solution = new Solution()
console.log('Middle with Efficient match => ', solution.middleEfficient(162, 934, 200))
