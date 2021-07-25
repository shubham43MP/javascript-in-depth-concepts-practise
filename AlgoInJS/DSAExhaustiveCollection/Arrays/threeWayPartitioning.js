/**
 *
 * [GFG ACCEPTED]
Given an array of size n and a range [a, b].
The task is to partition the array around the range such that array is divided into three parts.
1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.
 */

// const array = [ 9,8,6,2,1,5,0,18]
// const a = 1
// const b = 2

// const array = [ 1, 2, 3, 3, 4 ]
// const a = 1
// const b = 2

// const array = [2,5,87,56,12,4,9,23,76,1,45]
// const a = 15
// const b = 39

const array = [6, 22, 68, 5, 14, 62, 55, 27, 60, 45, 3, 3, 7, 85]
const a = 22
const b = 64

function duthNationalFlagAlgo(array, a) {
  let low = 0;
  let mid = 0
  let high = array.length - 1
  while(mid <= high) {
    if(array[mid] < a ) {
      const temp = array[low]
      array[low] = array[mid]
      array[mid] = temp
      low++
      mid++
      } else if ( array[mid] === a) {
      mid++
    } else {
      const temp = array[mid]
      array[mid] = array[high]
      array[high] = temp
      high--
    }
  }
  return array
}

/**
 * 
 * @param {Array} array 
 * @param {Number} a 
 * @param {Number} b 
 * @returns
 * Array with required properties as mentioned
 * 
 * T(n) = O(N)
 * 
 * S(n) = O(1)
 */
function threeWayPartition(array, a, b) {
  // Dutch National Flag Algo
  array = duthNationalFlagAlgo(array, a)
  array = duthNationalFlagAlgo(array, b)
  return array
}

console.log('final output ====> ', threeWayPartition(array, a, b))