/**
 * Median of 2 sorted arrays of equal size
 */

const arr1 = [ 2, 5, 8, 15, 17]
const arr2 = [ 1, 4, 6, 10, 14]

function medianOfSameSizeArray(arr1, arr2) {
  const totalLength = arr1.length + arr2.length
  let startIndex = (totalLength / 2) - 1
  let endIndex = startIndex + 1
  let i = 0
  let median = 0
  let leftI = 0
  let rightI = 0
  while(rightI + leftI <= totalLength - 1) {
    if(arr1[leftI] > arr2[rightI]) {      
      if( i === startIndex) median += arr2[rightI]
      else if( i === endIndex ) median += arr2[rightI]
      rightI++
    } else if (arr1[leftI] < arr2[rightI]) {
      if( i === startIndex) median += arr1[leftI]
      else if( i === endIndex ) median += arr1[leftI]
      leftI++
    } else {
      if( i === startIndex) {
        median += arr1[leftI]
        
      }
      else if( i === endIndex ) {
        median += arr1[leftI]
      }
      leftI++
      rightI++
    }
    i++
  }
  return median/2
}

console.log('Median is ', medianOfSameSizeArray(arr1, arr2))