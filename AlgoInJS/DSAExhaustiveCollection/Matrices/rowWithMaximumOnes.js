/**
 * [GFG ACCEPTED]
 * Given a boolean 2D array of n x m dimensions where each row is sorted.
 * Find the 0-based index of the first row that has the maximum number of 1's.
 */


const matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
]
// ans: 2

// const matrix = [
//     [0, 0],
//     [1, 1]
// ]
//ans: 1

// const matrix = [
//     [ 15, 8, 9, 5],
//     [6, 9, 0, 8]
// ] ans: -1

const n = matrix.length
const m = matrix[0].length

function rowWithMaxOnes(arr, n, m) {
    let resultRow = 0
    let maxOnesSoFar = 0
    for (let i = 0; i < n; i++) {
        let maxInRow = 0
        for (let j = 0; j < m; j++) {
            if(arr[i][j] === 1) maxInRow++
        }
        if(maxInRow > maxOnesSoFar) {
            maxOnesSoFar = maxInRow
            resultRow = i
        }
    }
    return (maxOnesSoFar === 0 ) ? -1 : resultRow    
}

console.log('The corresponding row is =>', rowWithMaxOnes(matrix, n, m))