/**
 * Given an array of positive and negative numbers, arrange them in an alternate fashion such that
 * every positive number is followed by negative and vice-versa maintaining the order of appearance.
 * Number of positive and negative numbers need not be equal.
 * If there are more positive numbers they appear at the end of the array.
 * If there are more negative numbers, they too appear in the end of the array.
 */

const input = [1, 2, 3, -4, -1, 4, 5, -8, 7 , -15 ]

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

console.log('Resultant Array is ', rearrangePositiveNegatives(input))