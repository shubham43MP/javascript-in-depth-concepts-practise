/**
 * Minimum Window Contiguous String
 *
 */

 class Solution {

  constructor(){
    this.patHash = 0
    this.primeModulo = 5003
  }

  /**
   *
   * @param {String} str
   * @returns
   * Modulo Sum hash of a string
   */
  hashValue(str) {
    let hashSum = 0
    for (let i = 0; i < str.length; i++) {
      if(str[i] === ' ') continue
      hashSum += str[i].charCodeAt()
    }
    return hashSum % this.primeModulo
  }

  /**
   *
   * @param {String} word
   * @returns Character sorted word
  */
    sortWord(word = '') {
    if(word) return word.split('').sort().join('')
    return word
  }

  /**
   *
   * @param {String} testString
   * @param {String} baseString
   * @returns
   * Anagram check of teststring against base string
   */
  isAnagram(testString, baseString = '') {
    if(baseString) return this.sortWord(baseString) === this.sortWord(testString)
    return true
  }


  minWindowContiguousSTR(input, pat) {
    let patMap = {}
    let strMap = {}
    const patLength = pat.length
    const inputLength = input.length
    if(inputLength < patLength ) return 'no such window can exist'
    let count = 0
    let low = 0
    let startI = -1
    let minLength = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < patLength; i++) {
      const element = pat[i];
      if(patMap[element]) patMap[element]++
      else patMap[element] = 1
    }

    for (let j = 0; j < input.length; j++) {
      const element = input[j]
      if(!patMap[element]) patMap[element] = 0
    }

    for (let i = 0; i < inputLength; i++) {
      const element = input[i];
      if(!strMap[element]) strMap[element] = 1
      else strMap[element]++
      if(strMap[element] <= patMap[element]) count++
      if(count === patLength) {
        // Minimize the window
        while( strMap[input[low]] >= patMap[input[low]] || patMap[input[low]] === 0 ) {
          if(strMap[input[low]] > patMap[input[low]]) {
            strMap[input[low]]--
          } else break
          low++
        }
        const len = i - low + 1
        if(minLength > len) {
          minLength = len
          startI = low
        }
      }
    }

    if(startI === -1) return 'no such window can exist'
    return input.substring(startI, startI + minLength)
  }
}


const solution = new Solution()
// const input = 'this is a test string'
// const pattern = 'tist'
const input = 'geeksforgeeks'
const pattern = 'ork'
solution.minWindowContiguousSTR(input, pattern)
