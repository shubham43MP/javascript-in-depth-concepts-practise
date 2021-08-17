/**
 * Remove all adjacent duplicates
 *
 */

 class Solution {

  /**
   *
   * @param {String} S
   *
   * Iteratively removes consecutive characters from result string
   */
  removeConsecutiveIterative(S) {
    const SLength = S.length
    let res = ''
    let i = 0
    while ( i < SLength) {
      let j = i + 1;
      if( S[j] !== S[i] ) res += S[i]
      i++
    }
    return res
  }
}


const solution = new Solution()
const S = 'aabb'
solution.removeConsecutiveIterative(S)
