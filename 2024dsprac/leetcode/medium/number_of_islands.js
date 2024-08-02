/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

function searchNode(i,j, input, m, n) {
  if( i < m && j < n && i >= 0 && j >= 0 && input[i][j] === "1") {
    input[i][j] = "0"
    searchNode(i, j+1, input, m, n)
    searchNode(i, j-1, input, m, n)
    searchNode(i+1, j, input, m, n)
    searchNode(i-1, j, input, m, n)
  } else return
}

function numberOfIslands(input, m, n) {
  let islandCount = 0;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j< n; j++) {
      const element = input[i][j]
      if(element === "1") {
        islandCount++
        searchNode(i,j, input, m, n)
      }
    }
  }
  return islandCount
}

console.log('Number of Islands are', numberOfIslands(grid, grid.length, grid[0].length))
