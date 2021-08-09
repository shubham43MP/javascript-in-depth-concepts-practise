/**
 * Given a binary matrix. Find the maximum area of a rectangle formed only of 1s in the given matrix.
 */


const matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0]
]

const n = matrix.length
const m = matrix[0].length

function maxRectangle() {
    
}

console.log('Max Area Rectangles is => ', maxRectangle(matrix, n, m))