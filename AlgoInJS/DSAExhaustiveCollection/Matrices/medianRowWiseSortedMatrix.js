/**
 * (GFG ACCEPTED)
 * Given a row wise sorted matrix of size RxC where R and C are always odd, find the median of the matrix.
 * O(1) space complexity
 * Expected Time Complexity: O(32 * R * log(C))
 * Expected Auxiliary Space: O(1)
 */

// const matrix = [
//   [1, 3, 5],
//   [2, 6, 9],
//   [3, 6, 9]
// ]
// Ans: 5

// const matrix = [[1], [2], [3]] //Ans: 2

// const matrix = [
//   [2, 3, 3],
//   [1, 5, 6],
//   [6, 6, 7]
// ]

const matrix = [
  [ 9, 16, 19, 27, 28 ],
  [ 32, 34, 40, 46, 58 ],
  [ 62, 64, 72, 73, 74 ],
  [ 78, 80, 86, 87, 89 ],
  [ 94, 95, 95, 98, 99 ]
]

const r = matrix.length
const c = matrix[0].length

/**
 *
 * @param {Array} array
 * @param {Number} x
 * @returns
 * Returns number of elements less than or equal to a particular number x
 */
function elementsLessThanX(array, x) {
  let low = 0;
  let high = array.length - 1;
  while(low <= high) {
    let middle = Math.floor(low + (high - low) / 2);
    if(array[middle] <= x) {
      low = middle + 1
    } else if ( array[middle] > x ) {
      high = middle - 1
    }
  }
  return low
}

/**
 *
 * @param {Array} matrix
 * @param {Number} r
 * @param {Number} c
 * @returns
 * Median of the given sorted array satisfying asked condition
 */
function matrixMedian(matrix, r, c) {
  const medianPoint = Math.ceil(r*c/2)
  let low = 0;
  let high = 2000;
  while(low <= high ) {
    let middle = Math.floor(low + (high - low) / 2);
    let numbersLessThanMiddle = 0
    for (let k = 0; k < matrix.length; k++) {
      numbersLessThanMiddle += elementsLessThanX(matrix[k], middle)
    }
    if(medianPoint <= numbersLessThanMiddle) {
      high = middle - 1
    } else if( medianPoint > numbersLessThanMiddle ) {
      low  = middle + 1
    }
  }
  return low
}

console.log('Median of the MX is ', matrixMedian(matrix, r, c))
