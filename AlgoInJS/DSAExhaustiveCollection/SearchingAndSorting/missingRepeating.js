/**
 * Missing Repeating in an array
 * Given an unsorted array Arr of size N of positive integers.
 * One number 'A' from set {1, 2, …N} is missing and one number 'B' occurs twice in array.
 * Find these two numbers.
 */

 class Solution {
  missingRepeating(arr, N) {
    let repeatedNumber = -1
    let sumOfArray = 0
    for (let i = 0; i < N; i++) {
      const element = arr[i];
      sumOfArray += element
    }
    for (let i = 0; i <= N - 1; i++) {
      const element = arr[i]
      if(element === -1) repeatedNumber = i + 1
      if(arr[element - 1]) {
        if(arr[element - 1] !== -1) arr[element - 1] = -1
      }
    }

    const missingNumber = (N * (N+1) / 2) - (sumOfArray - repeatedNumber) || -1
    console.log('ARRAY', [repeatedNumber , missingNumber])
  }
}


const solution = new Solution()
const arr = [5, 3,1,5,2,6] // 5, 4
// const arr = [2,2] // 2, 1
// const arr = [3, 1, 3] // 3, 2
// const arr = [1] // -1, -1
const N = arr.length
solution.missingRepeating(arr, N)
