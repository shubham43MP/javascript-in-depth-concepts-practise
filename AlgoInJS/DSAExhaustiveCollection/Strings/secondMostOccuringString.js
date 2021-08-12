/**
 * Given a sequence of strings, the task is to find out the second most repeated (or frequent) string
 * in the given sequence.
 * Note: No two strings are the second most repeated, there will be always a single string.
 * [OUTPUT FROM NODE COMES GOOD but GFG is messing up in some test cases]
 * T(n) = O(N)
 * S(n) = O(1)
 */

 class Solution {
  secondMostRepeated(arr, n) {
    const arrMap = {}
    let maximumRepitition = 0
    for (let i = 0; i < n; i++) {
      const element = arr[i];
      if(arrMap[element]) {
        arrMap[element]++
        if(arrMap[element] > maximumRepitition) maximumRepitition = arrMap[element]
      }
      else arrMap[element] = 1
    }

    let secondMax = 0
    let result = ''
    for (const key in arrMap) {
      if (Object.hasOwnProperty.call(arrMap, key)) {
        const element = arrMap[key];
        if( element !==  maximumRepitition) {
          if(secondMax < element) {
            secondMax = element
            result = key
          }
        }
      }
    }
    console.log('result', result)
    return result
  }
}

const arr = ['aaa', 'bbb' , 'ccc', 'bbb', 'aaa',  'aaa']
const n = arr.length

// const arr = ['geek', 'geek', 'nogeek']
// const n = arr.length

const solution = new Solution()
solution.secondMostRepeated(arr, n)
