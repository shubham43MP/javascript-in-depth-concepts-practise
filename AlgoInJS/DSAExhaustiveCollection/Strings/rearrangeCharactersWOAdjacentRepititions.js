/**
 * Given a string with repeated characters,
 * the task is to find feasibility such that
 * rearrange characters in a string so that no two adjacent characters are same.
 * Done with string porion. The next part is to actually have strings which is related to Priority Queue and heap
 */

 class Solution {
  RCWOAR(input) {
    let wordMap = {}
    let arr = input.split('').fill('')
    console.log('arr', arr)
    let maxRep = 0
    for (let i = 0; i < input.length; i++) {
      const element = input[i]
      if(wordMap[element]) {
        wordMap[element]++
        if(wordMap[element] > maxRep) maxRep = wordMap[element]
      } else {
        wordMap[element] = 1
      }
    }
    console.log('RES => ', wordMap)
    const threshold = input.length - maxRep + 1
    if( maxRep <= threshold) {
     return 1
    } else return 'Not Possible'
  }
}


const solution = new Solution()
solution.RCWOAR(input)
