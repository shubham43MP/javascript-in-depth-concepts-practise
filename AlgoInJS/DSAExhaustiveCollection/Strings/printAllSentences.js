/**
 * Recursively print all sentences that can be formed from list of word lists
 *
 * do with DFS logic
 * Solution not reliable
 */

 class Solution {

  // makeSentences(input, columnIterator, rowIterator, listCount, res = '') {
  //   // if(rowIterator <= listCount - 1) {
  //   //   res += input[rowIterator][columnIterator] + ' '
  //   //   this.makeSentences(input, columnIterator, rowIterator + 1, listCount, res)
  //   // }
  //   if( input[rowIterator] && columnIterator < input[rowIterator].length - 1) {
  //     res += input[rowIterator][columnIterator] + ' '
  //     this.makeSentences(input, columnIterator + 1, rowIterator, listCount, res)
  //   }

  //   // if(input[rowIterator] && columnIterator === input[rowIterator].length) {
  //   //   console.log('ssssssssssssss', res)
  //   //   return
  //   // }

  //   // base case
  //   // console.log('ip => ', input[rowIterator][columnIterator])
  //   if(rowIterator < listCount ) return input[rowIterator][columnIterator]
  //   if(rowIterator === listCount) console.log('==>', res)

  // }

  // printSentences(input) {
  //   const listCount = input.length
  //   let columnIterator = 0
  //   for (let j = 0; j < listCount; j++) {
  //     const element = input[j];
  //     this.makeSentences(input, columnIterator, j, listCount)
  //   }
  // }

  printSentencesRec(input) {
    const ip = input[0]

  }
}

const input = [
  ['you', 'we'],
  ['have', 'are'],
  ['sleep', 'eat', 'drink']
]


const solution = new Solution()
// solution.printSentences(input)
solution.printSentencesIterative(input)
