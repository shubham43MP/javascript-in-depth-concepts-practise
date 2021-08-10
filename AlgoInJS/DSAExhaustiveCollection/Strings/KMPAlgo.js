/**
 * String Matching Algorithm
 * Its full form is Knuth-Morris-Pratt Algorithm
 */

 class Solution {

  /**
   *
   * @param {String} pat
   *
   * Calculates a pie table for KMP
   */
  pieTable(pat) {
    let pf = []
    pf[0] = 0
    let j = 0
    for (let k = 1; k < pat.length; k++) {
      if(pat[j] === pat[k]) {
        pf[k] = pf[k - 1] + 1
        j++
      } else {
        j = 0
        pf[k] = 0
      }
    }
    return pf
  }

  /**
   *
   * @param {String} txt
   * @param {String} pat
   *
   * Prints indexes of matching pattern in the string
   */
  KMPAlgorithm(txt, pat) {
    const pyTable = this.pieTable(pat)
    let j = 0
    for (let g = 0; g < txt.length; g++) {
      const element = txt[g];
      if(element === pat[j]) {
        if( j === pat.length - 1 ) {
          console.log('Pattern found at ==> ', g - pat.length)
          j = 0
          continue
        }
        j++
        continue
      } else {
        j = pyTable[j] - 1
      }
    }
  }
}


const solution = new Solution()
const txt = 'abcabcabcabaababdababd'
const pat = 'ababd' // 10
solution.KMPAlgorithm(txt, pat)
