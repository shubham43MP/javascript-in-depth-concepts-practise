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

const inputArray = [1, 20, 6, 7, 5, 8, 11, 3]


// Method 2 - Merge Sort. T(n) = N*log(N)
class MergeSort {
  constructor() {
    this.inversionCount = 0
  }

  getIC() {
    return this.inversionCount
  }

  merge(left = [], right = []) {
    let arr = []
    let inversionCount = 0
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            this.inversionCount = this.inversionCount + left.length
            arr.push(right.shift())
        }
    }
    return { resultant: [ ...arr, ...left, ...right ] }
  }

  mergeSort(arr, l, r) {
  if(r>=l){
    if(r===l) {
     if(arr[l]) return { resultant: [arr[l]]}
     return { resultant: [] }
    } else {
        const mid = Math.floor((l + r)/2)
        const left = this.mergeSort(inputArray, l , mid)
        const right = this.mergeSort(inputArray, mid + 1, r)
        const result = this.merge(left.resultant, right.resultant)
        const { resultant = [] } = result
        return { resultant }
    }
  }
}
}

const inversion = new MergeSort()
inversion.mergeSort()

function inversionCountWithMS (inputArray) {
  const inversion = new MergeSort()
  const res = inversion.mergeSort(inputArray, 0, inputArray.length)
  return { resultant: res.resultant, inversionCount: inversion.inversionCount }
}

console.time('bruteeeeeeeeeee')
console.log('Brute force iversion count ==>', inversionCount(inputArray) ) //4.5ms
console.timeEnd('bruteeeeeeeeeee')


console.time('mergeeeeeee')
console.log('Merge Sort iversion count ==>', inversionCountWithMS(inputArray).inversionCount ) //0.19ms
console.timeEnd('mergeeeeeee')