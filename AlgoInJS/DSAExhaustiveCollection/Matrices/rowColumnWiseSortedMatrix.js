/**
 * GFG Accepted
 * Given an NxN matrix Mat. Sort all elements of the matrix.
 * Expected Time Complexity:O(N2LogN)
 * Expected Auxillary Space:O(N2)
 */

// const matrix = [
//     [10,20,30,40],
//     [15,25,35,45],
//     [27,29,37,48],
//     [32,33,39,50]
// ]

const matrix = [
    [40, 94, 73, 98, 27],
    [58, 89, 87, 95, 9],
    [95, 28, 34, 74, 32],
    [19, 46, 78, 64, 80],
    [72, 62, 86, 16, 99]
]

/**
 * 
 * @param {Number} N 
 * @param {Array} Mat 
 * @returns
 * Sorted Matrix
 */
function sortedMatrix(N, Mat) {
    const result = []
    for (let k = 0; k < N; k++) {
        for (let j = 0; j < N; j++) {
            result.push(Mat[k][j])
        }
    }
    result.sort((x, y) => x - y)
    let iterator = 0
    for (let k = 0; k < N; k++) {
        for (let j = 0; j < N; j++) {
            Mat[k][j] = result[iterator]
            iterator++
        }
    }
    return Mat
}

console.log('Sorted Matrix is ', sortedMatrix(matrix.length, matrix))