/**
 * Print Anagrams
 *
 */

 class Solution {

  constructor() {
    this.primeModulo = 5003
  }

  // Hash Function
  hashValue(str) {
    let hashSum = 0
    for (let i = 0; i < str.length; i++) hashSum += str[i].charCodeAt()
    return hashSum % this.primeModulo
  }

  // Anagram Check
  isAnagram(testString, baseString = '') {
    if(baseString) {
      return baseString.split('').sort().join() === testString.split('').sort().join()
    } else return true
  }

  // With hashing
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
}


const solution = new Solution()
const input = ['act','god','cat','dog','tac']
solution.anagrams(input)
console.log('Anagram Check for dog and god', solution.isAnagram('dog', 'god'))
