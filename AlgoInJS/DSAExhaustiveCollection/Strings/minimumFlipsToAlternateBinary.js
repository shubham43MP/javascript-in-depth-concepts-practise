/**
 * Given a binary string, that is it contains only 0s and 1s.
 * We need to make this string a sequence of alternate characters by flipping some of the bits,
 * our goal is to minimize the number of bits to be flipped.
 *
 * JS strings are immutable. But this is a proof of concept for the logic
 */

 class Solution {

  performNot = (input) => {
    if( input === '1' ) return '0'
    return '1'
  }

  // First Solution that came to mind
  minFlipsToAlternateBinary(S) {
    let lrCount = 0
    let prevFlipped = false
    for (let i = 1; i < S.length; i++) {
      let prevElement
      const element = S[i]
      if(prevFlipped) prevElement = this.performNot(S[i - 1])
      else {
        prevElement = S[i - 1];
      }
      if(prevElement === element ) {
        prevFlipped = true
        lrCount++
      } prevFlipped = false
    }

    prevFlipped = false
    let rlCount = 0
    for (let i = S.length - 2; i >= 0 ; i--) {
      let prevElement
      const element = S[i]
      if(prevFlipped) prevElement = this.performNot(S[i + 1])
      else prevElement = S[i + 1]
      if(prevElement === element ) {
        prevFlipped = true
        rlCount++
      } else prevFlipped = false
    }
    return Math.min(rlCount, lrCount)
  }
}


const solution = new Solution()
console.log('Minimum Flips are', solution.minFlipsToAlternateBinary('1011'.split('')))
