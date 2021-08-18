/**
 * Given two strings A and B, the task is to convert A to B if possible.
 * The only operation allowed is to put any character from A and insert it at front.
 * Find if it’s possible to convert the string.
 * If yes, then output minimum no. of operations required for transformation.
 * Input:  A = "ABD", B = "BAD"
 * Output: 1
 * xplanation: Pick B and insert it at front.
 * Input:  A = "EACBD", B = "EABCD"
 * Output: 3
 * Explanation: Pick B and insert at front, EACBD => BEACD
 * Pick A and insert at front, BEACD => ABECD
 * Pick E and insert at front, ABECD => EABCD
 *
 */

 class Solution {
  transformOneStringToAnother(A, B) {
    const ALength = A.length
    const BLength = B.length
    if(ALength !== BLength) return -1
    const charCount = {}
    for (let i = 0; i < A.length; i++) {
      const element = A[i];
      if(charCount[element]) charCount[element]++
      else charCount[element] = 1
    }

    for (let j = 0; j < B.length; j++) {
      const element = B[j];
      if(charCount[element] !== 0) charCount[element]--
    }

    for (const key in charCount) {
      if (Object.hasOwnProperty.call(charCount, key)) {
        const element = charCount[key];
        if(element > 0) return -1
      }
    }
    let count = 0
    let j = ALength - 1
    let i = ALength - 1

    while (i >= 0 ) {
      if(A[j] === B[i]) {
        j--
        i--
      }
      while(i >= 0 && A[i] !== B[j]) {
        i--
        count++
      }
    }
    return count
  }
}


const solution = new Solution()
const A = 'ABD'
const B = 'BAD' // 1
// const A = 'EACBD'
// const B = 'EABCD' // 3
console.log('Minimum traversal operations reqd => ', solution.transformOneStringToAnother(A, B))
