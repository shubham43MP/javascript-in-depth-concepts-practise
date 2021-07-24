/**
 * Given an array of integers (A[])  and a number x, find the smallest subarray with
 * sum greater than the given value
 * Note: The answer always exists. It is guaranteed that x doesn't
 * exceed the summation of a[i] (from 1 to N).
 */


// const a = [1, 4, 45, 6, 0, 19, 1, 51, 52]
// const x = 51
// const n = a.length
// Ans 3

// const a = [1, 10, 5, 2, 7]
// const x = 9
// const n = a.length
// Ans 1

// const a = [1, 2, 3, 4, 5, 6, 7, 8]
// const x = 20
// const n = a.length
// Ans 3

// const a = [2, 3, 1, 5, 6, 7]
// const x = 6
// const n = a.length
// ANs : 1



function smallestSubArrayWithSumGreaterThanX(a, n, x) {
  let start = 0
  let end = 0
  let minimaSize = n+1
  let sum = 0
  while( end < n ) {
    while(sum<=x && end<n) {
      sum += a[end]
      end++
    }
    while(sum > x && start<n) {
      minimaSize = Math.min(minimaSize, end-start)
      sum -= a[start]
      start++
    }
  }
  return minimaSize
}

console.log('Minimum Length of Sub Array is ', smallestSubArrayWithSumGreaterThanX(a, n, x))