/**
 * Ternary Search is like a Sister of Binary Search
 *
 * We divide the array into three portions
 *
 * T(n) = 4 * O(logN) + 1 [Log to base 3]
 * S(n)
 */

 class Solution {

  ternarySearch(input, l, r, target) {
    if(l <= r ) {
      const mid1 = Math.floor(l + (r-l)/3)
      const mid2 = Math.floor(r - (r-l)/3)
      if(input[mid1] === target) return mid1
      if(input[mid2] === target) return mid2
      if(target < input[mid1] ) return this.ternarySearch(input, l, mid1 - 1, target)
      else if(target > input[mid2]) return this.ternarySearch(input, mid2+1, r, target)
      else return this.ternarySearch(input, mid1 + 1, mid2 - 1, target)
    }
    return -1

  }

  driverTS(input, target) {
    const found = this.ternarySearch(input, 0, input.length - 1, target)
    console.log('found', found)
  }
}


const solution = new Solution()
solution.driverTS([1, 3, 8, 27, 45, 46, 47, 50, 51, 52, 53, 54, 55, 56, 57, 58], 47)
