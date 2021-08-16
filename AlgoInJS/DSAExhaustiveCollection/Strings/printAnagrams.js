/**
 * Print Anagrams
 *
 */

 class Solution {

  constructor() {
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
    for (let i = 0; i < str.length; i++) hashSum += str[i].charCodeAt()
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

  /**
   *
   * @param {Array<string>} input
   * Prints anagram group in an array with Hashing
   */
  anagrams(input) {
    const hashTable = {}
    for (let i = 0; i < input.length; i++) {
      const element = input[i];
      const currentHash = this.hashValue(element)
      const lastHash = hashTable[currentHash]
      if(lastHash) {
        if(this.isAnagram(element, lastHash[0])) hashTable[currentHash].push(element)
        continue
      }
      hashTable[currentHash] = [ element ]
    }

    for (const key in hashTable) {
      if (Object.hasOwnProperty.call(hashTable, key)) {
        const element = hashTable[key];
        console.log(element)
      }
    }
  }

  /**
   *
   * @param {Array<string>} input
   * Prints anagram group in an array with sorting
   */
  anagramPrint(input) {
    let sortedMap = {}
    for (let i = 0; i < input.length; i++) {
      const element = input[i]
      if(sortedMap[this.sortWord(element)]) {
        sortedMap[this.sortWord(element)].push(element)
        continue
      }
      sortedMap[this.sortWord(element)] = [element]
    }
    for (const key in sortedMap) {
      if (Object.hasOwnProperty.call(sortedMap, key)) {
        const element = sortedMap[key];
        console.log(element)
      }
    }
  }
}


const solution = new Solution()
const input = ['act','god','cat','dog','tac']
solution.anagrams(input)
solution.anagramPrint(input)
console.log('Anagram Check for dog and god', solution.isAnagram('dog', 'god'))
