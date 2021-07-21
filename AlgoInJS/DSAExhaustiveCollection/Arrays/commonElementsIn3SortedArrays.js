/**
 * [GFG]
 *Given three arrays sorted in increasing order.
 Find the elements that are common in all three arrays.
Note: can you take care of the duplicates without using any additional Data Structure?
 */

// const arr1 = [1, 5, 10, 20, 40, 80]
// const arr2 = [6, 7, 20, 80, 100]
// const arr3 = [3, 4, 15, 20, 30, 70, 80, 120]

const arr1 = [1, 5, 10, 20, 40, 80]
const arr2 = [6, 7, 20, 80, 100, 10, 5]
const arr3 = [3, 4, 15, 20, 30, 70, 80, 120, 5, 10]

// Using hash map

/**
 * 
 * @param {arr1} arr1 
 * @param {arr2} arr2 
 * @param {arr3} arr3 
 * @returns Array of common elements in above given arrays using hash map
 */
function commonElements(arr1, arr2, arr3) {
  let commonFinder1 = {}
  for (let index = 0; index < arr1.length; index++) {
    commonFinder1[arr1[index]] = 1
  }

  let commonFinder2 = {}
  for (let index = 0; index < arr2.length; index++) {
    if(commonFinder1[arr2[index]] ) {
      commonFinder2[arr2[index]]= commonFinder1[arr2[index]]
    }
  }

  let commons = []

  for (let index = 0; index < arr3.length; index++) {
    if(commonFinder2[arr3[index]] ) {
      commons.push(arr3[index])
    }    
  }
  return commons
}


console.log('Common Elements are ', commonElements(arr1, arr2, arr3))
