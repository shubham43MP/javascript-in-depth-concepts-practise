/*
  Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
  We dont have to use any sorting algorithm be it be Merge Quick Selection or Bubble.
  One Approach is to count number of all 0s 1s and 2s and than traverse again to replace the number,
  Other Approach is to count them again and parallely storing in new array.
  Later approach runs arr.lenght-c2-c0 times less than the above one but is taking some extra space
*/


function zeroOnesTwosSort(arr) {
  let c0 = 0;
  let c2 = 0;
  let result = [];
  const inputArrayN = arr.length
  for (let index = 0; index < inputArrayN; index++) {
    const element = arr[index];
    if(element === 0) {
      result[c0] = element
      c0++;
    } else if (element === 2) {
      result[inputArrayN - 1 - c2] = element
      c2++;
    }
  }
  for (let index = c0; index < inputArrayN - c2; index++) {
    result[index] = 1
  }
  return result;
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
const result = zeroOnesTwosSort(arr)
console.log('Resultant array is ', result)
