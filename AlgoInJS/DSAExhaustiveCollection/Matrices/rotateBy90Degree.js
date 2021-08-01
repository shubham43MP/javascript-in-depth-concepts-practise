/**
 * [LeetCode Accepted]
 * Given a square matrix, turn it by 90 degrees in a clockwise direction without using any extra space.
*/

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// const matrix = [
//     [1, 2],
//     [3, 4]
// ]

const matrix = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
]

const n = matrix.length

/**
 * 
 * @param {Array} matrix 
 * @param {Number} n 
 */
function rotateBy90(matrix, n) {
    // Calculate Transpose of matrix first
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if(i !== j) {
                const temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }        
    }
    // Make Column Transformations
    let low = 0
    let high = n - 1
    while (low < high) {
        for (let k = 0; k < n; k++) {
            const temp = matrix[k][low]
            matrix[k][low]= matrix[k][high]
            matrix[k][high]= temp
        }
        low++
        high--
    }
    return matrix
}

console.log('Rotated Matrix is => ', rotateBy90(matrix, n))