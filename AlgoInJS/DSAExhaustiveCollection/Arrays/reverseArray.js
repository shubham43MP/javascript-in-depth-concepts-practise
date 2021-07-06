let arr = [ 1, 4, 78, 6, 89, 56, 12]
const arrLength = arr.length

for(let i = 0;  i < ( Math.floor(arrLength / 2)); i++) {
  let temp = arr[i]
  arr[i] = arr[arrLength - 1 - i]
  arr[arrLength - 1 - i] = temp
}

console.log('Reverse array is ', arr)
// We can also do this with stack and can be found in AlgoInJS/DSinJS/Stack/numArrayReverseWithStack.js

// Recursive solution
function reverseArray(arr, start, end) {
  if(start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
    return reverseArray(arr, start, end)
  }
  return arr
}

const reversedArr = reverseArray(arr, 0, arrLength-1)
console.log('Recursive reverse array is ', reversedArr)
