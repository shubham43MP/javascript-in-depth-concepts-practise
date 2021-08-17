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
const S = 'aabccba' // abcba
// const S = 'geeksforgeeks' // geksforgeks
// const S = 'aaaaabbbbbb' //ab
console.log('Result iterativey is => ', solution.removeConsecutiveIterative(S))
