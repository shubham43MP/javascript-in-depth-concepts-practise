/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Integer array is sorted but rotated across a pivot
 * T(n) = O(log N)
 * S(n) = O(1)
 */

 class Solution {

  middle(start, end) {
    return Math.floor( start + (end - start)/2 )
  }

  bsBreakpoint(nums, start, end) {
    if(start <=  end) {
      const middle = this.middle(start, end)

      // Base case
      if(middle < end && (nums[middle] > nums[middle + 1]) ) return middle

      if(middle > start && nums[middle] < nums[middle - 1]) return middle - 1

      if(nums[start] >= nums[middle]) return this.bsBreakpoint(nums, start, middle - 1)

      return this.bsBreakpoint(nums, middle + 1, end)
    }
  }

  pointToPointBinarySearch(nums, start, end, target) {
    while(start <= end) {
      const middle = this.middle(start, end)
      if( nums[middle] === target) return middle
      else if(nums[middle] > target) end = middle - 1
      else if(nums[middle] < target) start = middle + 1
    }
    return -1
  }

  searchKey(nums, target) {
    const numsLength = nums.length
    // Find the breakpoint
    const breakpoint = this.bsBreakpoint(nums, 0, numsLength - 1)

    // Search in left array
    const leftPPSearch = this.pointToPointBinarySearch(nums, 0, breakpoint , target)
    if( leftPPSearch !== -1 ) return leftPPSearch

    // Search in right array
    return this.pointToPointBinarySearch(nums, breakpoint + 1, numsLength - 1, target)
  }
}


const solution = new Solution()
const nums = [4,5,6,7,0,1,2]
const target = 0 // 4
// const nums = [5, 6, 7, 8, 9, 10, 1, 2, 3]
// const target = 10 // 5
// const nums = [3, 5, 1, 2]
// const target = 6// -1
// const nums = [9, 10, 11,  0, 1, 2, 3, 4, 5, 6, 7, 8]
// const target = 6// 9
console.log('Key was found at index =>',solution.searchKey(nums, target))
