/**
 * [GFG]
 *Given three arrays sorted in increasing order.
 Find the elements that are common in all three arrays.
Note: can you take care of the duplicates without using any additional Data Structure?
 */

// const arr1 = [1, 5, 10, 20, 40, 80]
// const arr2 = [6, 7, 20, 80, 100]
// const arr3 = [3, 4, 15, 20, 30, 70, 80, 120]

const arr1 = [4, 4, 4]
const arr2 = [4, 4, 4]
const arr3 = [4, 4, 4]

// Using hash map

/**
 * 
 * @param {arr1} arr1 
 * @param {arr2} arr2 
 * @param {arr3} arr3 
 * @returns Array of common elements in above given arrays using hash map
 * 
 * T(n) = O(n1+n2+n3)
 * 
 * S(n) = O(n1+n2+n3)
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
    if(commonFinder2[arr3[index]] && !commons.includes(arr3[index]) ) {
      commons.push(arr3[index])
    }    
  }
  return commons
}

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @param {Array} arr3
 * @returns Array of common elements in above given arrays without using hash map
 * 
 * T(n) = O(n1+n2+n3)
 * 
 * S(n) = O(1)
 */
function commonElementsWithoutHashMap(arr1, arr2, arr3) {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = []
  while (i<arr1.length && j<arr2.length && k<arr3.length) {
    if((arr1[i] === arr2[j]) && (arr2[j] === arr3[k])){
      result.push(arr1[i])
      i++;
      j++;
      k++;
    }
    else if(arr1[i] < arr2[j]) i++;
    else if( arr2[j] < arr3[k]) j++;
    else k++
    let arr1El = arr1[i-1];
    while(arr1[i] === arr1El) i++;
    let arr2El = arr2[j-1];
    while(arr2[j] === arr2El) j++;
    let arr3El = arr3[k-1];
    while(arr3[k] === arr3El) k++;
  }
  if(result.length === 0) return -1
  return result
}


console.log('Common Elements are ', commonElements(arr1, arr2, arr3))
console.log('Common Elements W/o hashmap are ', commonElementsWithoutHashMap(arr1, arr2, arr3))
