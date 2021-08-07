/**
 * Given a string, find the length of the longest repeating subsequence such that the two
 * subsequences don't have same string character at the same position,
 * i.e., any i'th character in the two subsequences shouldn't have the same index in the original string.
 */

// General Approach - Not Reliable - DP Method to do this will come later
class Solution {
  constructor() {
    this.strMap = {}
    this.longestRepeated = 0
    this.finalResult = ''
    this.input = ''
  }

  longestRepeatingSubsequence(str) {
    this.input = str
    this.stringSubsequences(str, '')
  }

  stringSubsequences(input, output) {
    if (input.length == 0) {
      if(this.strMap[output] >= 1) {
        if(this.longestRepeated < output.length && output.length < Math.ceil(this.input.length / 2)) {
          this.longestRepeated = output.length
          this.finalResult = output
        }
        this.strMap[output]++
      } else {
        this.strMap[output] = 1
      }
        // console.log(output)
        return
    }
    this.stringSubsequences(input.substring(1), output, );
    this.stringSubsequences(input.substring(1), output + input[0]);
  }

}

/**
 * TCs
 * axxxy => 2 (xx)
 * aab => 1 (a)
 */

class Solution2 {

}

const solution = new Solution()
const solution2 = new Solution2()
solution.longestRepeatingSubsequence('ATACTCGGA')
