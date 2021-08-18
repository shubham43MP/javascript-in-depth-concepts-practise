/**
 * Given an m x n matrix,
 * find all common elements present in all rows in O(mn) time
 * and one traversal of matrix.
 *
 * S(N) = O(N)
 *
 * T(n) = O(N)
 */

 class Solution {
  findCommonElements(input) {
    const R = input.length
    const C = input[0].length
    let currMap = {}
    let prevMap = {}
    for (let i = 0; i < R; i++) {
      prevMap = currMap
      currMap = {}
      for (let j = 0; j < C; j++) {
        if(i === 0) {
          if(currMap[input[i][j]]) currMap[input[i][j]]++
          else currMap[input[i][j]] = 1
          continue
        }
        if(prevMap[input[i][j]] > 0) {
          if(currMap[input[i][j]]) currMap[input[i][j]]++
          else currMap[input[i][j]] = 1
          prevMap[input[i][j]]--
        }
      }
    }
    console.log('Comon Elements are => ')
    for (const key in currMap) {
      if (Object.hasOwnProperty.call(currMap, key)) {
        while(currMap[key] > 0) {
          console.log(parseInt(key, 10))
          currMap[key]--
        }
      }
    }
  }

}


const solution = new Solution()
const input = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 1, 1],
  [8, 7, 1, 3, 1],
  [8, 1, 2, 1, 9],
]
solution.findCommonElements(input)
