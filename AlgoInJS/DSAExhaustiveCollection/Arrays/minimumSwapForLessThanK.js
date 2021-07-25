/**
 * 
 * Given an array of n positive integers and a number k.
 * Find the minimum number of swaps required to bring all the numbers less than or equal to k together.
 */

// const array = [2, 1, 5, 6, 3]
// const n = array.length
// const k = 3

// const array = [2, 7, 9, 5, 8, 7, 4]
// const n = array.length
// const k = 6

const array = [10, 12, 20, 20, 5, 19, 19, 12, 1, 20, 1]
const n = array.length
const k = 11

function dutchNationalFlagAlgo(array, a, n) {
  let low = 0;
  let mid = 0
  let high = n - 1
  let swaps = 0
  while(mid <= high) {
    if(array[mid] < a ) {
      const temp = array[low]
      array[low] = array[mid]
      array[mid] = temp
      low++
      mid++
      if(array[low] < a) swaps++
      } else if ( array[mid] === a) {
      mid++
    } else {
      if(array[high] < a) swaps++
      const temp = array[mid]
      array[mid] = array[high]
      array[high] = temp
      high--
    }
  }
  return swaps
}

function minimumSwapFroLessThanK(arr, n, k) {
  return dutchNationalFlagAlgo(arr, k, n)
}