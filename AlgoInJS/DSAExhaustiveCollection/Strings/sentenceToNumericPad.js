/**
 * Given a sentence in the form of a string, convert it into its equivalent mobile numeric keypad sequence.
 *
 * https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/
 */

class Solution {
  constructor() {
    this.keyBindings = {
      'A': '2',
      'B': '22',
      'C': '222',
      'D': '3',
      'E': '33',
      'F': '333',
      'G': '4',
      'H': '44',
      'I': '444',
      'J': '5',
      'K': '55',
      'L': '555',
      'M': '6',
      'N': '66',
      'O': '666',
      'P': '7',
      'Q': '77',
      'R': '777',
      'S': '7777',
      'T': '8',
      'U': '88',
      'V': '888',
      'W': '9',
      'X': '99',
      'Y': '999',
      'Z': '9999',
      ' ': '0'
    }
  }

  sentenceToNumericPad(input) {
    const inputLength = input.length
    let result = ''
    for (let k = 0; k < inputLength; k++) {
      let element = input[k];
      if(element.charCodeAt() >= 97) element = String.fromCharCode(element.charCodeAt() - 32)
      result += this.keyBindings[element]
    }
    return result
  }
}


const solution = new Solution()
solution.sentenceToNumericPad('ABC')
