/*
  Given an array, rotate the array by one position in clock-wise direction.
*/
const input = [9, 8, 7, 6, 4, 2, 1, 3]
const temp = input[input.length - 1]

for (let index = input.length - 1; index >= 0; index--) {
  input[index] = input[index - 1]
  if(index === 0) input[index] = temp
}

console.log('Result is ', input)
