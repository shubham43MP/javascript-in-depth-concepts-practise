/**
 * Given a sorted array arr containing n elements with possibly duplicate elements,
 * the task is to find indexes of first and last occurrences of an element x in the given array.
 *
 * T(n) = O(logN)
 * S(n) = O(1)
 */

 class Solution {

  /**
   *
   * @param {Array} sortedArray
   * @param {Number} key
   * @returns
   *
   * Returns the first occurence of the key as an index
   */
  binarySearchFirst(sortedArray, key ){
    let start = 0;
    let end = sortedArray.length - 1;
    let first = Number.MAX_SAFE_INTEGER

    while (start <= end) {
        let middle = Math.floor( start + (end-start) / 2);
        if (sortedArray[middle] === key) {
            // found the key
            if(first > middle) first = middle
            // return middle;
            end = middle - 1
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    if(first !== Number.MAX_SAFE_INTEGER) return first
    // key wasn't found
    return -1;
  }

  /**
   *
   * @param {Array} sortedArray
   * @param {Number} key
   * @returns
   *
   * returns teh last occurence of the key
   */
  binarySearchLast(sortedArray, key ){
    let start = 0;
    let end = sortedArray.length - 1;
    let last = -1

    while (start <= end) {
        let middle = Math.floor( start + (end-start) / 2);
        if (sortedArray[middle] === key) {
            // found the key
            if(last < middle) last = middle
            // return middle;
            start = middle +1
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    return last
  }

  /**
   *
   * @param {Array} arr
   * @param {Number} n
   * @param {Number} x
   *
   * returns the first and last occurences of x in arr efficiently in O(logN)
   */
  firstAndLastOccurence(arr, n, x) {
    const first = this.binarySearchFirst(arr, x)
    const last = this.binarySearchLast(arr, x)
    console.log('FIRST AND LAST => ', first, last)
  }

  /**
   *
   * @param {Array} arr
   * @param {Number} n
   * @param {Number} x
   *
   * Returns the first and last occurences of x in arr in O(n) time
   */
  naiveFirstAndLastOccurence(arr, n ,x) {
    let first = -1
    let last = -1
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if(element === x) {
        if(first === -1 ) first = i
        last = i
      }
    }
    console.log('FIRST AND LAST => ', first, last)
  }
}

// const arr = [1, 3, 5, 5, 5, 5, 67, 123, 125]
const arr = [1, 3, 5, 5, 5, 5, 7, 123, 125]
const n = arr.length
const x = 7
const solution = new Solution()
solution.firstAndLastOccurence(arr, n, x)
solution.naiveFirstAndLastOccurence(arr, n, x)
