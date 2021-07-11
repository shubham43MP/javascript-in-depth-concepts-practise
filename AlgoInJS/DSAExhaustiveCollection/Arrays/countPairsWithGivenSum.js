/**
 * Given an arr of N integers, and an integer K, find the number of pairs of elements in
 * the array whose sum is equal to K.
 */


// Naive Brute Force Approach. T(n) = N*N
function pairCountWithGivenSum(arr, n, k) {
  let pairCount = 0;
  for (let index = 0; index < arr.length - 1; index++) {
    for (let innerIndex = index + 1; innerIndex < arr.length; innerIndex++) {
      if(arr[ innerIndex ] + arr[index] === k) pairCount++
      else continue      
    }    
  }
  return pairCount
}

const arr = [1, 1, 1, 1]
const k = 2

console.log('Number of pairs is with Naive Approach is ', pairCountWithGivenSum(arr, arr.length, k))