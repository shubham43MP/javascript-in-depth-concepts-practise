/**
 * Quick Sort Algorithm with Recursion
 *
 */

 class Solution {

  quickSort(arr, l,r) {
    if( r >= l) {
      if(r === l) {
        if(arr[l])
          return [arr[l]]
        return []
      } else {
        const pivot = arr[r]
        const low = l
        const high = r - 1
        while(low < high) {
          if(arr[low] > pivot) {

          }
        }
      }
    }
  }

  driverQS(input, n) {
    const result = this.quickSort(input, 0, n - 1)
  }
}


const solution = new Solution()
const input = [3, 5, 2, 55, 32, 98, 7]
const n = input.length
solution.driverQS(input, n)
