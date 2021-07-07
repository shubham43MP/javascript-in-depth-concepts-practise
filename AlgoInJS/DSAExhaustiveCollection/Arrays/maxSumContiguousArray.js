/**
 * Evaluating Sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum
 */

const input = [-2, -3, 4, -1, -2, 1, 5, -3]

let contiguousStart = 0;
let contiguousEnd = 0;
let max_so_far = 0;
let max_end_here = 0;

// Kadane's Algorithm
for (let index = 0; index < input.length; index++) {
  max_end_here = max_end_here + input[index];
  if(max_end_here < 0) {
    contiguousStart = index + 1
    max_end_here = 0
  }
  if(max_so_far < max_end_here){
    max_so_far = max_end_here
    contiguousEnd = index
  }
}

console.log('Max so far ', max_so_far, contiguousStart, contiguousEnd)
