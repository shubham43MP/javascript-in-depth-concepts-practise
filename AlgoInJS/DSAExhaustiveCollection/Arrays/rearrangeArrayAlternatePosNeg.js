/**
 * Given an array of positive and negative numbers, arrange them in an alternate fashion such that
 * every positive number is followed by negative and vice-versa maintaining the order of appearance.
 * Number of positive and negative numbers need not be equal.
 * If there are more positive numbers they appear at the end of the array.
 * If there are more negative numbers, they too appear in the end of the array.
 * [LEET CODE/ GFG]
 */

const input = [1, 2, 3, -4, -1, 4, 5, -8, 7 , -15 ]
// const arr = [1, 2, 3, -4, -1, 4, 5, -8, 7 , -15 ] // [ -4,   1, -1, 2, -8, 3, -15,  4, 5, 7]
const arr = [ 1, 2, 3, -4, -1, 4 ] // {-4, 1, -1, 2, 3, 4}

/**
 * 
 * @param {Array} input 
 * @returns {Array} Rearranged data of alternate positives and negatives
 * 
 * Note this doesnot maintain the order of appearance with the Quick Sort Algorithm
 */

function rearrangePositiveNegatives(input) {
  let pivot = 0;
  let j = 0;
  for (let index = 0; index < input.length; index++) {
    if(input[index] < pivot) {
      const temp = input[index]
      input[index] = input[j]
      input[j] = temp
      j++
    }
  }
  let i = 1;
  while (input[i] < 0) {
      const temp = input[i]
      input[i] = input[j]
      input[j] = temp
      i+=2
      j++
  }

  return input
}

/**
 * 
 * @param {Array} input 
 * @returns {Array}
 * 
 * Gives the array output for with alternate positives and negatives
 * 
 * This Approach uses a constant Space O(1) but with T(n) = N^2
 */
function rearrangePositiveNegativesInOrder(input) {
  let elementReplacedIndex = 0
  for (let index = 0; index < input.length; index++) {
    if(input[index] < 0) {
      const temp = input[index]
      for (let k = index; k >= elementReplacedIndex; k--) {
        input[k] = input[k - 1]
        if(k === elementReplacedIndex) input[k] = temp
      }
      elementReplacedIndex++
    }
  }
  let i = 1
  while ( input[i] < 0) {
    let j = elementReplacedIndex
    const temp = input[j]
    for (let k = j; k >= i; k--) {
      input[k] = input[k - 1]
      if(k === i) input[k] = temp
    }
    i+=2;
    elementReplacedIndex++;
  }
  return input
}

function cyclicallyRotate(input, startIndex, endIndex) {
  input[startIndex] = input[endIndex]
  for (let index = startIndex + 1; index < endIndex; index++) {
    const temp = input[index + 1]
    input[index] = input[index + 1]
    input[index + 1] = temp
  }
  return input
}

console.log('Resultant Array is ', rearrangePositiveNegatives(input))
console.log('Resulting Array without extra space is ', rearrangePositiveNegativesInOrder(arr))