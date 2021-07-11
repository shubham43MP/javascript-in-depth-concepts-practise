/**
 * Given an array of integers. Find the Inversion Count in the array.
  Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted.
  If array is already sorted then the inversion count is 0.
  If an array is sorted in the reverse order then the inversion count is the maximum. 
  Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
 */


// Brute Force T(n) = N*N
function inversionCount(inputArray) {
  let inversionCount = 0;
  for (let index = 0; index < inputArray.length; index++) {
    const outerElement = inputArray[index];
    for (let innerIndex = index + 1; innerIndex < inputArray.length; innerIndex++) {
      const innerElement = inputArray[innerIndex];
      if(outerElement > innerElement) inversionCount++
      else continue      
    }    
  }
  return inversionCount
}

const inputArray = [10, 10, 10]