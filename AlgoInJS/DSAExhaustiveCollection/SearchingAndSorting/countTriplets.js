/**
 * Given an array arr[] of distinct integers of size N and a sum value X,
 * the task is to find count of triplets with the sum smaller than the given sum value X.
 *
 * T(n) = O(N2)
 * S(n) = O(1)
 */

 class Solution {

  /**
   *
   * @param {Array} arr
   * @param {Number} N
   * @param {Number} X
   *
   * @returns
   *
   * Prints all the triplet count less than X
   *
   * T(n) = O(N^3)
   *
   * S(n) = O(1)
   */

  tripletCountNaive(arr, N, X) {
    arr.sort((a, b) => a-b)
    for (let i = 0; i < N - 2; i++) {
      for (let j = i + 1; j < N - 1; j++) {
        for (let k = j+1; k < N; k++) {
          if(arr[i] + arr[j] + arr[k] < X) {
            console.log('Triplet =>', arr[i], arr[j], arr[k])
          }
        }
      }
    }
  }

  tripletCount(arr, N, X) {
    arr.sort((a, b) => a-b)
    console.log('Array is ==> ', arr)
    for (let i = 0; i < N-2; i++)  {
      let low = i + 1;
      let high = N-1;
      const remainingSum = X -arr[i];
      while (low < high) {
        if( arr[low] + arr[high] < remainingSum ) {
          console.log('Triplet is =>', arr[i], arr[low], arr[high])
          high--;
        }
        if(arr[low] + arr[high] > remainingSum) {
          high--;
        }
        if(arr[low] + arr[high] == remainingSum) {
          low++;
        }
      }
    }

  }
}


const solution = new Solution()
const arr = [5, 1, 3, 4, 7]
const N = arr.length
const X = 12
// solution.tripletCount(arr, N, X)
// console.log('This is it => ', solution.pointToPointBSCounting([1, 3, 5, 7], 1 ,3, 7))
solution.tripletCountNaive(arr, N, X)
