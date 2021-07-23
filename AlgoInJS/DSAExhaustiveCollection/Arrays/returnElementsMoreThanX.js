/**
 * Given an array of size n, find all elements in array that appear more than n/k times.
 * For example, if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3].
 * Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times.
 * There are two elements that appear more than two times, 2 and 3
 */

const arr = [ 3, 1, 2, 2, 1, 2, 3, 3 ]
const k = 4

/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @param {Number} k
 * 
 * Prints elements more than n/k
 */

/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @param {Number} k 
 * @returns {Array}
 * 
 * Array of elements appearing more than n/k times.
 * 
 * T(n) = N*log(N)
 * 
 * S(n) = O(1)
 */
function elementsMoreThanX(arr, n , k ) {
  const nByK = Math.floor(n/ k)
  arr.sort( (x, y) => x - y )
  let currentNumber = arr[0]
  let currentNumberCount = 1
  let result = []
  for (let i = 1; i < n; i++) {
   if(arr[i] === currentNumber ) {
     currentNumberCount++ 
   } else {
      if(currentNumberCount > nByK) result.push(currentNumber)
      currentNumber = arr[i]
      currentNumberCount = 1
   }
  }  
  if(currentNumberCount > nByK) result.push(currentNumber)
  return result
}


/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @param {Number} k 
 * @returns {Array}
 * 
 * Array of elements appearing more than n/k times.
 * 
 * T(n) = N
 * 
 * S(n) = O(N) - Its of order N but will always be less than N in majority cases
 */
function elementsMoreThanXWithMap(arr, n , k) {
  const nByK = Math.floor(n/ k)
  const elementsMap = {}
  let result = []
  for (let i = 0; i < n; i++) {
    if(elementsMap[arr[i]]) {
      elementsMap[arr[i]]++
      continue
    }
    elementsMap[arr[i]] = 1
  }
  for (const key in elementsMap) {
    if (Object.hasOwnProperty.call(elementsMap, key)) {
      const element = elementsMap[key];
      if(element > nByK) result.push(parseInt(key, 10))
    }
  }
  return result
}

console.log('Elements More than K ', elementsMoreThanX(arr, arr.length, k))
console.log('Elements More than K With Hash Map', elementsMoreThanXWithMap(arr, arr.length, k))