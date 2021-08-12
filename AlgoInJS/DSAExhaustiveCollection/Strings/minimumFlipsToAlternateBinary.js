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

  // More Enhanced
  minFlipsToAlternateBinaryAltEvenOdd(S) {
    let startZero = 0
    let startOne = 0
    for (let i = 0; i < S.length; i++) {
      if(i%2 === 0 && S[i] !== '0') startZero++
      if ( i%2 === 0 && S[i] !== '1') startOne++
      if(i%2 === 1 && S[i] !== '0') startOne++
      if(i%2 === 1 && S[i] !== '1') startZero++

    }
    return Math.min(startZero, startOne)
  }
}


const solution = new Solution()
const input = '100'
console.log('Minimum Flips are', solution.minFlipsToAlternateBinary(input.split('')))
console.log('Minimum Flips are with Aproach 2 ', solution.minFlipsToAlternateBinaryAltEvenOdd(input.split('')))
