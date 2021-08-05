/**
 * [GFG ACCEPTED]
 * Given a N x N matrix,
 * where every row and column is sorted in non-decreasing order.
 * Find the kth smallest element in the matrix.
 */

// const mat = [
//   [ 9, 16, 19, 27, 28 ],
//   [ 32, 34, 40, 46, 58 ],
//   [ 62, 64, 72, 73, 74 ],
//   [ 78, 80, 86, 87, 89 ],
//   [ 94, 95, 95, 98, 99 ]
// ]

// const mat = [[16, 28, 60, 64],
// [22, 41, 63, 91],
// [27, 50, 87, 93],
// [36, 78, 87, 94 ]] k = 3 ans = 27

const mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [24, 29, 37, 48],
  [32, 33, 39, 50]
]

const k = 7



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
 * @param {Array} mat
 * @param {Number} n
 * @param {Number} k
 * @returns
 * Returns kth smallest element in the array
 */
function kthSmallestElement(mat, n, k) {
  const smallestPoint = k
  let low = 0;
  let high = 10000;
  while(low <= high ) {
    let middle = Math.floor(low + (high - low) / 2);
    let numbersLessThanMiddle = 0
    for (let j = 0; j < mat.length; j++) {
      numbersLessThanMiddle += elementsLessThanX(mat[j], middle)
    }
    if(smallestPoint <= numbersLessThanMiddle) {
      high = middle - 1
    } else if( smallestPoint > numbersLessThanMiddle ) {
      low  = middle + 1
    }
  }
  return low
}

console.log('Median of the MX is ', kthSmallestElement(mat, mat.length, k))
