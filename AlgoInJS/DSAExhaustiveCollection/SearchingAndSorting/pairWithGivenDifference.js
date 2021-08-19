/**
 * Given an array Arr[] of size L and a number N, you need to write a program to find if there exists
 * a pair of elements in the array whose difference is N.
 *
 * GFG has no acceptance to JS for this. But we are pretty sure the solution would get accepted
 */


class Solution {

  /**
   *
   * @param {Array} nums
   * @param {Number} start
   * @param {Number} end
   * @param {Number} target
   * @returns
   */
  pointToPointBinarySearch(nums, start, end, target) {
    while(start <= end) {
      const middle = Math.floor( start + (end - start)/2 )
      if( nums[middle] === target) return middle
      else if(nums[middle] > target) end = middle - 1
      else if(nums[middle] < target) start = middle + 1
    }
    return -1
  }

  /**
   *
   * @param {Array} arr
   * @param {Number} L
   * @param {Number} N
   * @returns
   * Whether a pair exists in given arr whose difference equals to N
   *
   * T(n) = O(L * log(L))
   *
   * S(n) = O(1)
   */
  differencePair(arr, L, N) {
    // Sort the array in L*log(L)
    arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const operativeKey = element + N
      const searchOK = this.pointToPointBinarySearch(arr, i + 1, L - 1, operativeKey)
      if(searchOK !== -1 ) return 1
    }
    return -1
  }
}


const solution = new Solution()
// const arr = [5, 20, 3, 2, 5, 80]
// const L = arr.length
// const N = 78 // True

const arr = [90, 70, 20, 80, 50]
const L = arr.length
const N = 45 // false
console.log('Such difference exists ==>', solution.differencePair(arr, L, N))
