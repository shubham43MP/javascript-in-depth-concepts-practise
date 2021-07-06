let arr = [ 1, 4, 78, 6, 89, 56, 12, 115, -8]
let min = arr[0]
let max = arr[0]
arr.forEach(element => {
  if(min > element) min = element;
  else if(max < element) max = element;
});

// T(O) = n-1

console.log('Minimum element is ',  min, 'and Max element is ', max)

// Divide and Conquer Method

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
