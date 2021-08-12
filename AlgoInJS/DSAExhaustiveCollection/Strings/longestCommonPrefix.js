/**
 * [LEET CODE ACCEPTED]
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 */

 class Solution {
  longestCommonPrefix(strs) {
    const totalStrs = strs.length
    let commonPrefix = ''
    if(totalStrs && (strs[0].length === 0) ) return ''
    if(totalStrs === 1 ) return strs[0]
    for (let i = 0; i < strs[0].length; i++) {
      const activeElement = strs[0][i]
      for (let j = 1; j < totalStrs; j++) {
        if( strs[j][i] && strs[j][i] === activeElement ) {
          if( j === totalStrs - 1 ) commonPrefix += activeElement
        } else {
          return commonPrefix
        }
      }
    }
    return commonPrefix
  }
}


const solution = new Solution()
// solution.longestCommonPrefix(["flower","flow","flight"])
console.log('aaaaaaaaaaaaaaa', solution.longestCommonPrefix([""]))
