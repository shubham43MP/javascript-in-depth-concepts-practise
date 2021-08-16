/**
 * Given a string str we need to tell minimum characters to be added at front of string to make string palindrome.
 *
 */

 class Solution {

  naiveApproach() {
    const strLength = input.length
    let low = 0
    let high = strLength - 1
    // Check palindrom after reoving every element at last
  }

  longestCommonPrefix (strs) {
    let prefix = ""
    if(strs === null || strs.length === 0) return prefix

    for (let i=0; i < strs[0].length; i++){
        const char = strs[0][i] // loop through all characters of the very first string.

        for (let j = 1; j < strs.length; j++){
          // loop through all other strings in the array
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
}

  minCharForPalindrome(input) {
    // const strLength = input.length
    // let low = 0
    // let high = 2
    // while( high < strLength && input[low] !== input[high]) {
    //   low++
    //   high++
    // }

    // while(low > 0 && high < strLength && input[low] === input[high]) {
    //   low--
    //   high++
    // }

    // let minRequired = Math.min( (strLength - 1  - high), strLength - 1)
    const specialCase = `${input.split('').reverse().join('')}#${ input }`
    let abc = this.longestCommonPrefix(specialCase)

    console.log('WHATS GOT? ', abc, input, specialCase )

  }
}


const solution = new Solution()
const input = 'ABCA'
solution.minCharForPalindrome(input)
