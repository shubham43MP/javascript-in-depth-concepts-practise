/**
 * [MICROSOFT]
 * Given a 2D grid of n*m of characters and a word, find all occurrences of given word in grid.
 * A word can be matched in all 8 directions at any point.
 * Word is said be found in a direction if all characters match in this direction (not in zig-zag form).
 * The 8 directions are, horizontally left, horizontally right, vertically up, vertically down
 * and 4 diagonal directions.
 *
 * T(n) = O(R*C*8*pat.length).
 * S(n) = O(1)
 */

 class Solution {
  constructor() {
    this.directionMap = {
      'rl': 1, // Right to left
      'lr': 2, // left to Right
      'tb': 3, // Top to bottom
      'bt': 4, // Bottom to Top
      'dlrtb': 5, // Diagonally left to right top bottom
      'drltb': 6, // diagonally right to left top to bottom,
      'drlbt': 7, // Diaognally right to left bottom to top
      'dlrbt': 8, // Diagonally left to right bottom to top
    }

    this.patLength = 0
  }

  searchAllDirections(i, j, pat, input, N, M, idx, direction = null) {
    let found = ''
    if( i>=0 && j>=0 && i< N && j < M && (input[i][j] === pat[idx]) ) {
      idx += 1
      if(idx === this.patLength) {
        switch(this.directionMap[direction]) {
          case 1: {
            found = `{${ i }, ${ j + (this.patLength - 1)}} `
            break;
          }

          case 2: {
            found = `{${ i }, ${ j - (this.patLength - 1)}} `
            break;
          }

          case 3: {
            found = `{${ i - (this.patLength - 1) }, ${ j }} `
            break;
          }

          case 4: {
            found = `{${ i + (this.patLength - 1) }, ${ j }} `
            break;
          }

          case 5: {
            found = `{${ i - (this.patLength - 1) }, ${ j - (this.patLength - 1) }} `
            break;
          }

          case 6: {
            found = `{${ i - (this.patLength - 1) }, ${ j + (this.patLength - 1) }} `
            break;
          }

          case 7: {
            found = `{${ i + (this.patLength - 1) }, ${ j + (this.patLength - 1) }} `
            break;
          }

          case 8: {
            found = `{${ i + (this.patLength - 1) }, ${ j - (this.patLength - 1) }} `
            break;
          }

          default: {
            found= ''
            break;
          }
        }
      } else {
        if(direction) {
          switch(this.directionMap[direction]) {
            case 1: {
              found += this.searchAllDirections(i , j - 1, pat, input, N, M, idx, 'rl')
              break;
            }

            case 2: {
              found += this.searchAllDirections(i , j + 1, pat, input, N, M, idx, 'lr')
              break
            }

            case 3: {
              found += this.searchAllDirections(i + 1, j, pat, input, N, M, idx, 'tb')
              break
            }

            case 4: {
              found += this.searchAllDirections(i - 1, j + 1, pat, input, N, M, idx, 'bt')
              break;
            }

            case 5: {
              found += this.searchAllDirections(i + 1, j + 1, pat, input, N, M, idx, 'dlrtb')
              break;
            }

            case 6: {
              found += this.searchAllDirections(i + 1, j - 1, pat, input, N, M, idx, 'drltb')
              break;
            }

            case 7: {
              found += this.searchAllDirections(i - 1, j - 1, pat, input, N, M, idx, 'drlbt')
              break;
            }

            case 8: {
              found += this.searchAllDirections(i - 1, j + 1, pat, input, N, M, idx, 'dlrbt')
            }
          }
        } else if (direction === null) {
          found += this.searchAllDirections(i , j - 1, pat, input, N, M, idx, 'rl')
          found += this.searchAllDirections(i , j + 1, pat, input, N, M, idx, 'lr')
          found += this.searchAllDirections(i + 1, j, pat, input, N, M, idx, 'tb')
          found += this.searchAllDirections(i - 1, j + 1, pat, input, N, M, idx, 'bt')
          found += this.searchAllDirections(i + 1, j + 1, pat, input, N, M, idx, 'dlrtb')
          found += this.searchAllDirections(i + 1, j - 1, pat, input, N, M, idx, 'drltb')
          found += this.searchAllDirections(i - 1, j - 1, pat, input, N, M, idx, 'drlbt')
          found += this.searchAllDirections(i - 1, j + 1, pat, input, N, M, idx, 'dlrbt')
        }
      }
    }
    return found
  }

  wordSearchGrid(grid, pat) {
    const N = grid.length
    const M = grid[0].length
    this.patLength = pat.length
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if(grid[i][j] === pat[0]) {
          const found = this.searchAllDirections(i, j, pat, grid, N, M, 0, null)
          console.log('Found At => ', found)
        }
      }
    }
  }
}

const grid = [
  ['a', 'b', 'a', 'b'],
  ['a', 'b', 'e', 'b'],
  ['e', 'b', 'e', 'b']
]

const pat = 'abe'

// Outputs:
// Found At =>  {0, 0}
// Found At =>  {0, 2}
// Found At =>  {1, 0}

// const grid = [
//   ['a', 'b', 'c' ],
//   ['d', 'r', 'f' ],
//   ['g', 'h', 'i' ]
// ]

// const pat = 'abc'

// Outputs:
// Found At =>  {0, 0}

// const grid = [
//   "GEEKSFORGEEKS",
//   "GEEKSQUIZGEEK",
//   "IDEQAPRACTICE"
// ]

// const pat = "GEEKS"

// Outputs:
// Found At =>  {0, 0}
// Found At =>  {0, 8}
// Found At =>  {1, 0}

const solution = new Solution()
solution.wordSearchGrid(grid, pat)
