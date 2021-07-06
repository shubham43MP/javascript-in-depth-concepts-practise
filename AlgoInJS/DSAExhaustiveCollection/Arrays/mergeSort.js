/*
  Since merge sort has constant time complexity of O(nlogn) we can do a lot of good stuff using it.
  Note that Space complexity for Merge Sort is more but it is efficient in time perspective.
  Quick Sort is good for shorter arrays but not for big datasets.
  Note: We can directly call .sort() for JS but its not allowed in DSA and doesnt exhibit our knowledge
*/

function getMaxMinOfTwo(x, y) {
  let max; let min;
  if(x > y) {
    max = x;
    min = y;
  } else {
    max = y;
    min = x;
  }
  return { max, min }
}

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ...right ]
}


function mergeSort(arr, l, r, size) {
  if(r >= l) {
    if(r === l) {
      console.log('return', arr[l])
      if(arr[l]) return [arr[l]]
      return
    }
    if( r === l+1 ) {
      const { max, min } = getMaxMinOfTwo(arr[l], arr[r])
      return [ min, max]
    } else {
      const mid = Math.floor((l + r) / 2)
      const left = mergeSort(arr, l, mid)
      const right = mergeSort(arr, mid + 1, r)
      return merge(left || [], right || [])
    }
  }
}

const driverMS = (collection) => {
  return mergeSort(collection, 0, collection.length-1)
}

module.exports = {
  driverMS,
  getMaxMinOfTwo
}
