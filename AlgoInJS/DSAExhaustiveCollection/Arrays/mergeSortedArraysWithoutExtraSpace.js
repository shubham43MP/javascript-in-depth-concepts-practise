/**
 * Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is sorted in non-decreasing order.
 * Merge the two arrays into one sorted array in non-decreasing order without using any extra space.
 * https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1
 */

let arr1 = [1, 3, 5, 7]
let arr2 = [0, 2, 6, 8, 9]
const N = arr1.length
const M = arr2.length

// Method 1, Brute Force like Insertion Sort
// T(n) = O(n) + O(Mlog(M)

function mergeLikeInsertionSort(arr1, arr2, N, M) {
  for (let index = 0; index < N; index++) {
    if(arr1[index] > arr2[0]) {
      const temp = arr1[index];
      arr1[index] = arr2[0]
      arr2[0] = temp
    }
    arr2.sort()    
  }
  // console.log('Arr1 is ', arr1, ' Arr2 is ', arr2)
}

// mergeLikeInsertionSort(arr1, arr2, N, M)

// Method 2, Gap Method
// T(n) = 

function gap(input) {
  return Math.ceil(input/2)
}

function mergeWithGapMethod(arr1, arr2, N, M) {
  let gapVal = gap(N+M)
  let traverseInitialIndex = 0
  let traverseSecondIndex = 0
  if(gapVal <= N && traverseSecondIndex <=) traverseSecondIndex = gapVal
  else traverseSecondIndex = Math.abs(gapVal-M)
  let index = 0
  while(index < N+M) {
    if(index < N) console.log(arr1[index])
    if(index >= N && index < N+M) console.log(arr2[index - N])
    index++
  }
  
}

mergeWithGapMethod(arr1, arr2, N, M)
