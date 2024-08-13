/**
 * https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */
// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
const nums1 = [4,5,6,0,0,0]
const nums2 = [1,2,3]
const m = nums1.length
const n = nums2.length
let a = 0;
let b = 0;


/**
 * T(n) = O(m+n)
 * S(n) = O(1)
 */
function mergeSortedArray(arr1, arr2, m, n) {
  for(let i = 0; i < m+n; i++) {
    const arr1El = arr1[a];
    const arr2El = arr2[b];
    if(arr1El <= arr2El) {
      if(arr1El === 0) {
        arr1[a] = arr2El;
        a++;
        b++;
      } else a++
      // a++;
    } else {
        // exchange
        if(arr2[b]) {
          arr1[a] = arr2[b];
          arr2[b] = arr1El
          a++;
        }
    }
  }
  return arr1

}

console.log(mergeSortedArray(nums1, nums2, m, n))
