/**
 * [GFG ACCEPTED]
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
   * Prints all the triplets that sum less than X
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

  /**
   *
   * @param {Array} arr
   * @param {Number} N
   * @param {Number} X
   *
   * @returns
   *
   * Ttriplet count that sum less than X
   *
   * T(n) = O(N^2)
   *
   * S(n) = O(1)
   */

  tripletCount(arr, n, sum) {
    arr.sort((a, b) => a-b)
    let count = 0
    for (let i = 0; i < n-2; i++)  {
      let low = i + 1;
      let high = n-1;
      while (low < high) {
        const lowHighSum = arr[i] + arr[low] + arr[high]
        if( lowHighSum < sum ) {
          count += high - low
          low++;
        }
        if(lowHighSum >= sum) high--;
      }
    }
  }
}


const solution = new Solution()
// const arr = [5, 1, 3, 4, 7]
// const N = arr.length
// const X = 12

const arr = [-2, 0, 1, 3]
const N = arr.length
const X = 2
solution.tripletCount(arr, N, X)
// solution.tripletCountNaive(arr, N, X)
