/**
 * Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m.
 * Task is to check whether a2[] is a subset of a1[] or not.
 * Both the arrays can be sorted or unsorted. It may be assumed that elements in both array are distinct
 */

// const arr1 = [11, 1, 13, 21, 3, 7, 0]
// const arr2 = [11, 3, 7, 1, 0 ]

const arr1 = [589, 5847, 595 ,959 ,258]
const arr2 = [25, 258]

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 
 * 
 * Yes or No based on the array 2 being a Subset or not
 * 
 * T(n) = O(N)
 * 
 * S(n) = O(N)
 */
function arraySubsetCheck(arr1, arr2) {
  const arr1Map = {}
  let isSubSet = false
  for (let i = 0; i < arr1.length; i++) {
    if(arr1Map[arr1[i]] || arr1Map[arr1[i]] === 0 ) {
      continue
    }
    arr1Map[arr1[i]] = 1 
  }

  for (let j = 0; j < arr2.length; j++) {
    const element = arr2[j]
    if(arr1Map[arr2[j]] || arr1Map[arr2[j]] === 0) {
      isSubSet = true
      continue
    }
    return 'No'
  }
  return isSubSet ? 'Yes' : 'No'
}

/**
 * Note: Brute force approach involve checking all elements of the arr 2 in arr 1 and break if not Found
 * T(n) = O(N*N)
 */

console.log('Is Subset ? ', arraySubsetCheck(arr1, arr2))