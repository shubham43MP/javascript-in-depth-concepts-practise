/**
 * Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
 * I 1
 * V 5
 * X 10
 * L 50
 * C 100
 * D 500
 * M 1000
 *
 * T(n) =
 * S(n)
 */

 class Solution {
  constructor() {
    this.romanDigitMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
  }

  romanToDecimal(str) {
    if(str.length % 2 !== 0) str = 'K' + str
    let result = 0
    let i = 0
    while (i <= str.length - 1) {
      const currElem = str[i]
      let nextElement = str[i + 1]
      i = i + 2
      if(currElem === 'K') {
        result += this.romanDigitMap[nextElement]
        continue
      }
      if( this.romanDigitMap[nextElement] > this.romanDigitMap[currElem])
        result += this.romanDigitMap[nextElement] - this.romanDigitMap[currElem]
      else result += this.romanDigitMap[currElem] + this.romanDigitMap[nextElement]
    }
    return result
  }
}

// const input = 'CMXXVI' // 926
// const input = 'CDXXIV' // 424
// const input = 'XIX' // 19
// const input = 'IV' // 4
// const input = 'CCCXCIX' // 399
// const input = 'MMMCMXCIX' // 3999
const input = 'CMXIV' // 914

const solution = new Solution()
console.log('SOLUTION => ', solution.romanToDecimal(input))
