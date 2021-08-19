/**
 * Given an array A of N elements.
 * Find the majority element in the array.
 * A majority element in an array A of size N is an element that appears more than N/2 times in the array.
 *
 * T(n) = O(N)
 * S(n) = O(1)
 */

 class Solution {

  /**
   *
   * @param {Array} a
   * @param {Number} size
   * @returns
   *
   * Outputs element which occurs more than N/2 times
   * T(n) = O(N)
   *
   * S(n) = O(1)
   */
  majorityElement(a, size) {
    // Moore's Voting Algorithm
    let majCandidate = a[0]
    let count = 1
    for (let i = 1; i < a.length; i++) {
      const element = a[i];
      if(element === majCandidate) count++
      else {
        count --
        if(count === 0) {
          majCandidate = element
          count = 1
        }
      }
    }
    // Verify the candidate
    count = 0
    for (let i = 0; i < a.length; i++) {
      if(a[i] === majCandidate) count++
    }
    if(count > Math.floor(size/2)) return majCandidate
    return -1
  }
}


const solution = new Solution()
const a = [2,2,2, 4, 5]
const size = a.length
console.log('Majority element is ==> ', solution.majorityElement(a, size))
