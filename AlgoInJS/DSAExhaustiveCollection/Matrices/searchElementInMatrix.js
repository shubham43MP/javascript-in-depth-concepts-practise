/**
 * [LEETCODE Accepted]
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 */

// const matrix = [
//     [ 1, 3, 5, 7 ],
//     [ 10, 11, 16, 20 ],
//     [ 23, 30, 34, 60 ]
// ]

const matrix = [[1], [3]]

const target = 3

function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

/**
 * 
 * @param {Array} matrix 
 * @param {number} target 
 * @returns Boolean whether target exists or not
 */
function searchInMatrix(matrix, target) {
    const r = matrix.length
    const c = matrix[0].length
    for (let i = 0; i < r; i++) {
        if (target === matrix[i][0] ) return true
        else if (target === matrix[i][c-1] ) return true
        else if(target > matrix[i][0] && target < matrix[i][c-1] ) {
            const search = binarySearch(matrix[i], target)
            if(search === -1 ) return false
            return true
        }        
    }
    return false
}

console.log('Matrix search => ', searchInMatrix(matrix, target))