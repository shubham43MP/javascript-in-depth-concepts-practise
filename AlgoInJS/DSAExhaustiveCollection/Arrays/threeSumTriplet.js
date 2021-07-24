/**
 * [GFG ACCEPTED]
 * Given an array arr of size n and an integer X.
 * Find if there's a triplet in the array which sums up to the given integer X.
 */

// const A = [18,  1, 4, 45, 6, 10, 9]
// const n = A.length
// const X = 13 Ans: True

const A = [1, 2, 4, 3, 6]
const n = A.length
const X = 10

/**
 * 
 * @param {Array} A 
 * @param {Number} n 
 * @param {Number} X 
 * @returns
 * 
 * Boolean whether triplet exists or not
 * 
 * T(n) = O(N*N) or O(N*logN) depending upon
 * 
 * S(n) = O(1)
 */
function threeSumTriplet(A, n, X) {
  A.sort( (x, y) => x - y) // This sort can be merge sort if constant space not there else Quick or even Bubble sort as N*N is allowed
  for (let i = 0; i < n - 1; i++) {
    let low = i + 1
    let high = n - 1
    let remainingSum = X - A[i]
    while(high > low) {
      if(A[low] + A[high] === remainingSum) return true
      if(A[low] + A[high] >= remainingSum) {
        high--
        continue
      }
      if(A[low] + A[high] <= remainingSum) {
        low++
        continue
      }
    }
  }
  return false
}

console.log('Triplet Exists? ', threeSumTriplet(A, n, X))