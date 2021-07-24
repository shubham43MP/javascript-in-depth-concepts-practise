/**
 * Given an array arr[] of N non-negative integers representing the height of blocks.
 * If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season
 */

// const arr = [3,0,0,2,0,4] // 10
// const arr = [2, 0, 2] // 2
const arr = [3, 0, 5, 0, 2, 0, 4] // 13
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

console.log('Trapped Rainwater is ', trappingWater(arr, n))