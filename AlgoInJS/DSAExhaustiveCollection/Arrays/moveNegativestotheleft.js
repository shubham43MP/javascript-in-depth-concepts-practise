/*
  An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive number.
  T(n)= O(n)
  Note that order is not important here.
  Contant Extra space is O(1) and not O(n)
  So we need S(n) = O(1)
*/

function moveNegativesToLeft(input) {
  let start = 0
  let end = input.length - 1
  while(start < end) {
    const element = input[start];
    if(element > 0) {
      while( input[end] > 0 && end > start ) end--
      let temp = element;
      input[start] = input[end];
      input[end] = temp;
    }
    start++
  }
}

// Test cases
let input = [-12, 11, -13, 45, 46, 47, 48, 50, 54, 78, 86, -18, -19, -25, 22, 58, -5, 6, -7, 5, -3, -6 , 8, -17]
console.log('Result is ', input)
