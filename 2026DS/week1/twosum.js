/*
Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: There is no pair with sum equals to given target.
*/

function twoSum(arr, target) {
  let sumMap = {};
  const length = arr.length
  for(let i = 0; i < length; i++) {
    const element  = arr[i]
    const remTarget = target - element;
    if(sumMap[element]) {
      return { exist: true, elements: `(${element},${remTarget})` }
    }
    sumMap[remTarget] = i;
  }
  return false
}

console.log(twoSum([0, -1, 2, -3, 1], -2))
console.log(twoSum([1, -2, 1, 0, 5], 0))
