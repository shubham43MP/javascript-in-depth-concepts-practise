/**
 * [GFG ACCEPTED]
 * Sprial Traversal of a matrix
 */

// const matrix = [
//   [1, 3, 5, 6, 9],
//   [5, 8, 4, 2, 9],
//   [13, 15, 23, 3, 87],
//  ]

//  Ans: [ 1, 3,  5,  6,  9, 9, 87, 3, 23, 15, 13, 5, 8, 4,  2
// ]

// const matrix = [
//   [1, 2, 3, 4 ],
//   [5,6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16 ]
// ]

// Ans: [ 1,  2,  3,  4, 8, 12, 16, 15, 14, 13, 9,  5, 6,  7, 11, 10 ]

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]


 const r = 3
 const column = 4

 function spiralTraversal(matrix, r, c) {
  let top = 0
  let down = r - 1
  let left = 0
  let right = c - 1
  let direction = 0
  let result = []
  while(left <= right && top <= down ) {
    if( direction === 0 ) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])        
      }
      top++
      direction = 1
    } else if ( direction === 1 ){
      for (let i = top; i <= down; i++) {
        result.push(matrix[i][right])   
      }
      right--
      direction = 2
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[down][i])        
      }
      down--
      direction = 3
    } else if (direction === 3) {
      for (let i = down; i >= top; i--) {
        result.push(matrix[i][left])        
      }
      left++
      direction = 0
    }
  }

  return result
 }

 console.log('SPIAL TRAVERSAL', spiralTraversal(matrix, r, column))
