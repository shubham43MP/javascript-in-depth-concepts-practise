/**
 * Recursive Merge Sort
 *
 * T(n) =
 * S(n)
 */

 class Solution {

  merge(left = [], right = []) {
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

  mergeSort(arr, l, r) {
    if( l <= r ) {
      if( r === l ) {
        if(arr[l]) return [arr[l]]
        return []
      } else {
        const midpoint = Math.floor(l + (r-l)/2)
        const leftArr = this.mergeSort(arr, l, midpoint)
        const rightArr = this.mergeSort(arr, midpoint + 1, r)
        const result = this.merge(leftArr || [], rightArr || [])
        return result
      }
    }
  }

  driverMS(arr) {
    const result = this.mergeSort(arr, 0, arr.length)
    return result
  }
}


const solution = new Solution()
const input = [3, 5, 2, 55, 32, 98, 7]
const result = solution.driverMS([3, 5, 2, 55, 32, 98, 7])
console.log('Sorted Array => ', result, "Test pasing ? => ", input.sort((a,b) => a-b) )
