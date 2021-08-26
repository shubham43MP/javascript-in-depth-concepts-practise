/**
 * Description
 *
 * T(n) =
 * S(n)
 */

 class Solution {
  productArray(nums) {
    let netProd = 1
    const productArray = []
    for (let i = 0; i < nums.length; i++) {
      productArray[i] = netProd
      netProd *= nums[i]
    }
    netProd = 1
    for (let i = nums.length - 1; i >= 0; i--) {
      productArray[i] = netProd * productArray[i]
      netProd *= nums[i]
    }
    return productArray
  }
}


const solution = new Solution()
// const nums = [10, 3, 5, 6, 2]
// const nums = [0, 12, 0]
const nums = [4, 1, 7, 7, 11, 1, 3, 8, 5, 12, 1, 4, 11, 4, 4, 13, 12, 6, 2, 7, 3, 4, 8, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
solution.productArray(nums)
