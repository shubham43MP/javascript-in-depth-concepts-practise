/**
 * Given an array of positive integers.
 * Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers,
 * the consecutive numbers can be in any order.
 */

// const input = [1,9,3,10,4,20,2] // [ 1, 2, 3, 4 ]
// const input = [2,6,1,9,4,5,3] // [ 1, 2, 3, 4, 5, 6 ]
// const input = [ 1, 8, 0, 2, 5, 3, 6, 5, 1, 4 ] // 0 1 1 2 3 4 5 5 6
// const input = [ 0, 1, 2, 3, 15, 16, 17 , 18, 19 ] // 0 1 1 2 3 4 5 5 6
const input = [ 6, 6, 2, 3, 1, 4, 1, 5, 6, 2, 8, 7, 4, 2, 1, 3, 4, 5, 9, 6 ] // 1 2 3 4 5 6 7 8 9 (unique)

/**
 * 
 * @param {Array} input 
 * @returns
 * Longest Possible Subsequence of consecutive numbers
 * 
 * T(n) = N*logN
 * 
 * S(n) = O(N) For Majority of cases will be less then O(N)
 */
function longestPossibleSubsequence(input) {
  let input = [...new Set(items)] // Makes all ARray Elements Unique
  input.sort( (x, y) => x-y )
  console.log('Input', input)
  let max_size_so_far = 0;
  let max_size = 0
  let max_start_here = 0
  let max_ending_here = 0
  const maxTracker = {}
  for (let index = 0; index < input.length; index++) {
    if((input[index + 1] - input[index] === 1) || (input[index + 1] - input[index] === 0)) {
      max_ending_here = index + 1
      max_size_so_far++
    } else {
      if(max_size < max_size_so_far) max_size = max_size_so_far
      maxTracker[max_size_so_far] = { start: max_start_here, end: max_ending_here }
      max_start_here = index + 1
      max_ending_here = index + 1
      max_size_so_far = 0
    }
  }
  const maxOne = maxTracker[max_size.toString()] ? maxTracker[max_size.toString()] : {}
  const startIndex = maxOne ? maxOne.start : max_start_here
  const endIndex = maxOne ? maxOne.end :  max_ending_here
  return input.slice(startIndex, endIndex + 1)
}

console.log('Sequence is ', longestPossibleSubsequence(input))
