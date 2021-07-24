/**
 * [GFG ACCEPTED]
 * Given an array arr[] of N non-negative integers representing the height of blocks.
 * If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season
 */

const arr = [3,0,0,2,0,4] // 10
// const arr = [2, 0, 2] // 2
// const arr = [3, 0, 5, 0, 2, 0, 4] // 13
// const arr = [3, 0, 5, 1, 6, 2, 1, 4] // 12
// const arr = [7, 4, 0, 9] // 10
const n = arr.length


/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @returns
 * 
 * The Volume in units of the trapped water
 * 
 * T(n) = O(N)
 * 
 * S(N) = O(N) or rather 2N
 */
function trappingWater(arr, n) {
    let left = []
    let right = []
    left[0] = arr[0]
    let max = left[0]
    for (let i = 1; i < n; i++) {
      left[i] = Math.max(arr[i], max)
      if(left[i] > max) max = left[i]
    }
    max = arr[n-1]
    right[n-1] = max
    for (let i = n-2; i >= 0; i--) {
      right[i] = Math.max(arr[i], max) 
      if(right[i] > max) max = right[i]
    }

    let water = 0
    for (let i = 0; i < n; i++) {
      water += (Math.min(left[i], right[i]) - arr[i])
    }
    return water
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @returns
 * 
 * The Volume in units of the trapped water using only 1 extra array
 * 
 * T(n) = O(N)
 * 
 * S(N) = O(N)
 */
function trappingWaterOneArray(arr, n) {
    let right = []
    let max = arr[n-1]    
    right[n-1] = max
    for (let i = n-2; i >= 0; i--) {
      right[i] = Math.max(arr[i], max) 
      if(right[i] > max) max = right[i]
    }

    let water = 0
    max = arr[0]
    for (let i = 0; i < n; i++) {
      if(arr[i] > max) max = arr[i]
      water += (Math.min(max, right[i]) - arr[i])
    }
    return water
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @returns
 * 
 * The Volume in units of the trapped water using constant space
 * 
 * T(n) = O(N)
 * 
 * S(N) = O(1)
 */
function trappingWaterConstantSpace(arr, n) {
    let low = 0
    let high = n - 1
    let leftMax = 0
    let rightMax = 0
    let result = 0
    while (low <= high) {
      if(arr[low] < arr[high]) {
        if(arr[low] > leftMax) leftMax = arr[low]
        else result += leftMax - arr[low]
        low++
      }
      else {
        if(arr[high] > rightMax){
          rightMax = arr[high]
        } else {
          result += rightMax - arr[high]
        }
        high --
      }      
    }
    return result
}

console.log('Trapped Rainwater is ', trappingWater(arr, n))
console.log('Trapped Rainwater 1 array is ', trappingWaterOneArray(arr, n))
console.log('Trapped Rainwater constant space is ', trappingWaterConstantSpace(arr, n))