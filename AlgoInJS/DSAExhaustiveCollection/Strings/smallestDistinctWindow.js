/**
 * [AMAZON]
 * Given a string 's'.
 * The task is to find the smallest window length that contains all the characters of the given string at least one time.
 * For eg. A = “aabcbcdbca”, then the result would be 4 as of the smallest window will be “dbca”
 *
 */

 class Solution {
  smallestDistinctWindow(s) {
    let distinctStrMap = {}
    let distinctElements = 0
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      if(distinctStrMap[element] === 0) continue
      distinctStrMap[element] = 0
      distinctElements++
    }

    let count = 1
    let i = 0
    let j = 1
    const n = s.length
    let ans = s.length
    distinctStrMap[s[0]] = 1
    while( j < n ) {
      const element = s[j]
      if( distinctElements === count ) {
        while(distinctElements === count && (i < j)) {
          if(distinctStrMap[s[i]] > 1) {
            distinctStrMap[s[i]]--
            ans = Math.min(ans, j - i + 1 )
          }
          else if(distinctStrMap[s[i]] === 1) {
            if(Math.min(ans, j - i + 1 ) >= distinctElements) ans = Math.min(ans, j - i + 1 )
            distinctStrMap[s[i]]--
            count--
          }
          i++
        }
      } else if( distinctElements > count ) {
        if(distinctStrMap[element] === 0) {
          count++
        }
        distinctStrMap[element]++
        if(distinctElements > count )
        j++
      }
    }
    return ans
  }
}

// const s = 'aabcbcdbca' //4 dbca
// const s  = 'AABBBCBBAC'//3 BAC
// const s = 'GEEKSGEEKSFOR' // 8 GEEKSFOR
const s = 'aaab' // 2 ab

const solution = new Solution()
console.log('RESULT => ',solution.smallestDistinctWindow(s))
