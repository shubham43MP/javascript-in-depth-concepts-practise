/**
 * Given a string A and a dictionary of n words B, find out if A can be segmented into a space-separated sequence of dictionary words.
 * Note: From the dictionary B each word can be taken any number of times and in any order.
 *
 * T(n) =
 * S(n)
 *
 * Its a DP problem
 */

// const A = 'like'
// const B = ['i', 'like', 'sam',
// 'sung', 'samsung', 'mobile',
// 'ice','cream', 'icecream',
// 'man', 'go', 'mango']
const B = ['iajxlo', 'h', 'q']
const A = 'hhqhq'
// const A = 'lrbbmqbabowkkab'
// const B = ['rbbmqb', 'cd', 'r', 'owkk']
// const A = 'isamsung'
// const B = ['i', 'sam', 'sun', 'samsung']
const n = 12


 class Solution {
  wordBreak(A, B) {
    for (let j = 0; j < B.length; j++) {
      const element = B[j];
      const elementIndex = A.indexOf(element)
      const mapper = A.split(' ')
      if(B.includes(mapper[mapper.length - 1])) break
      if(elementIndex !== -1) {
        const localCopy = A.substring(0, elementIndex + element.length)
        // console.log('elementIndex =>', elementIndex + " element =>  " + element +" A =>  " +A, 'LOCAL COPY => ', localCopy)
        A = localCopy + ' ' + A.substring(elementIndex + element.length, A.length)
      }
    }
    const wordContents = A.trim().split(' ')
    console.log('wordContents', wordContents)
    for (let k = 0; k < wordContents.length; k++) {
      const element = wordContents[k];
      if(B.includes(element) ) {
        continue
      }
      return 0
    }
    return 1
  }
}


const solution = new Solution()
console.log('Can be segmented? => ', solution.wordBreak(A, B))
