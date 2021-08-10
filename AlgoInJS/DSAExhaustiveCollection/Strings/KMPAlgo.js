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
    let i = 0
    let j = 1
    while(j < pat.length) {
      if(pat[i] === pat[j]) {
        pf[j] = i + 1
        i++
        j++
      } else {
        if( i === 0 ) {
          pf[j] = 0
          j++
        } else {
          i = pf[i - 1]
        }
      }
    }
    return pf
  }

  /**
   *
   * @param {*} s
   */
  longestPrefixSuffix(s) {
    const correspondingPyTable = this.pieTable(s)
    console.log('Indiaa => ', correspondingPyTable[s.length - 1], correspondingPyTable)
    return correspondingPyTable[s.length - 1]
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
// solution.longestPrefixSuffix('joeuljjo')
solution.longestPrefixSuffix('joeuljjo')
