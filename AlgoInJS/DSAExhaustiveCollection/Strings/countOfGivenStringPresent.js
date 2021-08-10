/**
 * Given a 2-Dimensional character array and a string,
 * we need to find the given string in 2-dimensional character array such that individual characters
 * can be present left to right, right to left, top to down or down to top.
 */

class Solution {
  constructor() {
    this.count = 0
  }

  findPatRecursively(i, j , R, C, pat, input, idx) {
    let found = 0
    if( i>=0 && j>=0 && i<R && j<C && (pat[idx] === input[i][j]) ) {
      const temp = pat[idx]
      input[i][j] = 0
      idx += 1
      if(idx === pat.length) {
        found = 1
      } else {
        found += this.findPatRecursively(i+1, j, R, C, pat, input, idx)
        found += this.findPatRecursively(i-1, j, R, C, pat, input, idx)
        found += this.findPatRecursively(i, j + 1,R, C, pat, input, idx)
        found += this.findPatRecursively(i, j-1, R, C, pat, input, idx)
      }
      input[i][j] = temp
    }
    return found
  }

  stringIn2DArray(input , pat) {
    const R = input.length
    const C = input[0].length
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if(input[i][j] === pat[0]) {
          const found = this.findPatRecursively(i, j , R, C, pat, input, 0)
          this.count += found
        }
      }
    }
    return this.count
  }
}


const input = a =[
  ['D', 'D', 'D', 'G', 'D', 'D'],
  ['B', 'B', 'D', 'E', 'B', 'S'],
  ['B', 'S', 'K', 'E', 'B', 'K'],
  ['D', 'D', 'D', 'D', 'D', 'E'],
  ['D', 'D', 'D', 'D', 'D', 'E'],
  ['D', 'D', 'D', 'D', 'D', 'G']
 ]

const pat = 'GEEKS'

// const input = [
//   ['S', 'H', 'U', 'D', 'D'],
//   ['H', 'D', 'E', 'E', 'F'],
//   ['U', 'U', 'D', 'D', 'D'],
//   ['S', 'H', 'F', 'F', 'F']
// ]

// const pat = 'SHU' // 3

const solution = new Solution()
solution.stringIn2DArray(input, pat)
