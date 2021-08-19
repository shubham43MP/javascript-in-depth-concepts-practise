/**
 * A step array is an array of integers where each element has a difference of at most k with its neighbor.
 * Given a key x,  * we need to find the index value of x if multiple-element exist to return the first
 * occurrence of the key.
 *
 * T(n) =
 * S(n)
 */

 class Solution {
  searchIndex(arr, k, x, n) {
    let diff
    let i = 0
    while (i < n) {
      const element = arr[i]
      if(element === x ) return i
      diff = Math.abs(arr[i] - x)
      i = i + Math.ceil(diff/k)
    }
    return -1
  }
}


const solution = new Solution()
// const arr = [4, 5, 6, 7, 6]
// const k = 1
// const x = 6 // Ans: 2
const arr = [20, 40, 20, 50, 70, 70, 70, 60, 50, 40  ]
const k = 20
const x = 60 // Ans: 7
console.log('Index searched at => ', solution.searchIndex(arr, k, x, arr.length))
