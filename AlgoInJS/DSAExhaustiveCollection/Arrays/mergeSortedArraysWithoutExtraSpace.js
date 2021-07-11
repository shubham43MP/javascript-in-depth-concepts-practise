/**
 * Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is sorted in non-decreasing order.
 * Merge the two arrays into one sorted array in non-decreasing order without using any extra space.
 * https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1
 */

let arr1 = [1, 5, 9, 10, 15, 20]
let arr2 = [2, 3, 8, 13]
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
  if(input === 1 ) return 0
  return Math.ceil(input/2)
}

function getTraversalPoint(arr1, arr2, N, M, index) {
  if(index < N) return index
  if(index >= N && index < N+M) return index-N
}

function mergeWithGapMethod(arr1, arr2, N, M) {
  let gapVal = gap(N+M)
  while ( gapVal >= 1 ) {
    let traverseInitialIndex = 0
    let traverseSecondIndex = gapVal
    let index = 0
     while(index < N+M) {
    console.log('AAAAAAAAAAAAAAAAA', traverseInitialIndex, traverseSecondIndex, gapVal)
    if(traverseInitialIndex < N && traverseSecondIndex < N) {
      if(arr1[traverseInitialIndex] > arr1[traverseSecondIndex]) {
        let temp = arr1[traverseInitialIndex]
        arr1[traverseInitialIndex] = arr1[traverseSecondIndex]
        arr1[traverseSecondIndex] = temp;
      }
      console.log('111111111111111111111', arr1, arr2, gapVal)
    }
    else if(traverseInitialIndex < N && traverseSecondIndex < N + M && traverseSecondIndex >= N) {
      if(arr1[traverseInitialIndex] > arr2[traverseSecondIndex - N - 1]) {
      let temp = arr1[traverseInitialIndex]
      arr1[traverseInitialIndex] = arr2[traverseSecondIndex - N - 1]
      arr2[traverseSecondIndex - N - 1] = temp;
    }
    }
    else if(traverseInitialIndex > N && traverseSecondIndex < N + M && traverseInitialIndex > N){
      console.log('33333333333333333333333')
      if(arr2[traverseInitialIndex - N - 1] > arr2[traverseSecondIndex - N - 1 ]) {
      let temp = arr2[traverseInitialIndex - N - 1]
      arr2[traverseInitialIndex - N - 1] = arr2[traverseSecondIndex - N - 1]
      arr2[traverseSecondIndex - N - 1] = temp;
    }
  }
    index++
    traverseInitialIndex++
    traverseSecondIndex++
  }
  gapVal = gap(gapVal)
}

console.log('Result ', arr1, arr2)
 
}

mergeWithGapMethod(arr1, arr2, N, M)
