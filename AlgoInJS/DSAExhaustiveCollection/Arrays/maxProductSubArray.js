/**
 * Given an array Arr that contains N integers (may be positive, negative or zero).
 * Find the product of the maximum product subarray.
 */

// const input = [6, -3, -10, 0, 2] // 180 0 2

// const input = [2, 0, 6, -3, -10, 0, 1] // 180 2 4

const input = [0, 0, 0, 4, 0, 5, 0] //2 5 5

/**
 * 
 * @param {Array} input 
 * @returns {Array}
 * 
 * Returns a max product Sub Array
 */
function maxProductSubArray(input) {
  let max_so_far = 1;
  let max_ending_here = 1;
  let max_start_here = 0;
  let max_index_end_here = 0
  let prev_max_start_here = 0
  for (let index = 0; index < input.length; index++) {
    if(input[index] === 0) {
      max_ending_here = 1
      if(index + 1 < input.length && input[index + 1] > 0 ) {
        prev_max_start_here = max_start_here
        max_start_here = index + 1
      }
      continue
    }
    max_ending_here *= input[index]
    if(max_so_far < max_ending_here) {
      max_so_far = max_ending_here
      max_index_end_here = index
    }
  }
  if(max_start_here > max_index_end_here) max_start_here = prev_max_start_here
  return input.slice(max_start_here, max_index_end_here + 1)
}

console.log('Max Prod SubArray is ', maxProductSubArray(input))