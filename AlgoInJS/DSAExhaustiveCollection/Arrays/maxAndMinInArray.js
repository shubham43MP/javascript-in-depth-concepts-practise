let arr = [ 1, 4, 78, 6, 89, 56, 12, 115, -8]
let min = arr[0]
let max = arr[0]
arr.forEach(element => {
  if(min > element) min = element;
  else if(max < element) max = element;
});

// T(n) = n-1

console.log('Minimum element is ',  min, 'and Max element is ', max)

/*
  Tournament Method
  Divide and Conquer Strategy
*/

class MaxMinPair {
  constructor() {
    this.max = null;
    this.min = null;
  }
}
class MaxMin {
  pairMaxMin(array, low, high) {
    let maxMin = new MaxMinPair()
    if(low === high){
      maxMin.max = array[low]
      maxMin.min = array[low]
      return maxMin
    } else if (high === low + 1) {
      if (array[high] > array[low]){
        maxMin.max = array[high]
        maxMin.min = array[low]
      }
      else {
        maxMin.min = array[high]
        maxMin.max = array[low]
      }
      return maxMin
    }
      let mml = new MaxMinPair()
      let mmr = new MaxMinPair()
      let mid = Math.floor((low + high)/2)
      mml = this.pairMaxMin(arr, low, mid)
      mmr = this.pairMaxMin(arr, mid + 1, high)
      if(mml.max > mmr.max) maxMin.max = mml.max
      else  maxMin.max = mmr.max
      if(mml.min > mmr.min) maxMin.min = mmr.min
      else maxMin.min = mml.min
      return maxMin
  }
}

const maxMin = new MaxMin()
const result = maxMin.pairMaxMin(arr, 0, arr.length - 1)
console.log('Post recursion Minimum element is ',  result.min, 'and Max element is ', result.max)

// T(n) = 3n/2 -2 (Again its O(n))

/*
  Best Method : Compare in pairs
  It is the best of 3 in O(n)
  If total elements are odd, initialise min and max as first element
  if total elements are even, initialise min and max as min and max of two
*/
function getMinMaxByPair(arr, arraySize, start, end, maxMinPair = null) {
  if( start === 0) {
    const maxMinPair = new MaxMinPair()
    if(arraySize % 2 === 0) {
      const { max, min } = getMaxOfTwo(arr[0], arr[1])
      maxMinPair.max = max;
      maxMinPair.min = min;
      start += 2
      end += 2
    } else {
      maxMinPair.max = arr[0]
      maxMinPair.min = arr[0]
      start++
      end++
    }
    return getMinMaxByPair(arr, arraySize, start, end, maxMinPair)
  } else if( start > 0 && ((arraySize) > end)) {
    const { max, min } = getMaxOfTwo(arr[start], arr[end])
    if(maxMinPair.max < max) maxMinPair.max = max
    if(maxMinPair.min > min)  maxMinPair.min = min
    start += 2
    end += 2
    return getMinMaxByPair(arr, arraySize, start, end, maxMinPair)
  } else {
    return maxMinPair
  }
}

function getMaxOfTwo(x, y) {
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

const minMaxPair = getMinMaxByPair(arr, arr.length, 0, 1)
console.log('Post Pair compare Minimum element is ',  minMaxPair.min, 'and Max element is ', minMaxPair.max)
