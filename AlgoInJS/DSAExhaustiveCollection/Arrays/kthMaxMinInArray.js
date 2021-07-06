const { driverMS: mergeSort } = require('./mergeSort')

/* kth max and minimum element in Array*/
const arr = [ 1, 4, 78, 6, 89, 56, 12, 115, -8]
let k = 4

/* We should sort the array by Merge sort in O(nlogn) and then find out the required element in O(1)*/

const kthMaxMin = (collection, k) => {
  if(k > collection.length) console.log('Input invalid')
  else {
    const sortedArray = mergeSort(collection)
    return { kthMax: sortedArray[collection.length - k], kthMin: sortedArray[k - 1] }
  }
}

const { kthMax, kthMin } = kthMaxMin(arr, k)
console.log(`${ k }th max element is ${ kthMax } and ${ k }th min element is ${ kthMin }`)
