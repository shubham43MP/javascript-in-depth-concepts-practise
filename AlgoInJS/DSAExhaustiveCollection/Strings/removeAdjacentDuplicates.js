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

  baseCase( S, i, j, res) {
    if( i === S.length ) return res
    let prev = S[++i]
    let curr = S[++j]
    if(curr !== prev) res += prev
    return this.baseCase( S, i, j, res)
  }

  /**
   *
   * @param {String} S
   *
   * Recursively removes consecutive characters from result string
  */
  removeConsecutiveRecursively(S) {
    let res = ''
    let i = -1
    let j = 0
    return this.baseCase( S, i, j, res)
  }
}


const solution = new Solution()
const S = 'aabccba' // abcba
// const S = 'geeksforgeeks' // geksforgeks
// const S = 'aaaaabbbbbb' //ab
console.log('Result iterativey is => ', solution.removeConsecutiveIterative(S))
console.log('Result recursively is => ', solution.removeConsecutiveRecursively(S))
