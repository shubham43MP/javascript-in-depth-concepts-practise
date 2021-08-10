/**
 * Given a string str of length N, you have to find number of palindromic subsequence (need not necessarily be distinct) which could be formed from the string str.
Note: You have to return the answer module 10^9+7;

 * There is an optimised solution for this with Dynamic Programming which we take their
 *
 * T(n) = N2
 * S(n) = N2
 */

/**
 * Naive Solution: Find out all subsequences and actualy check if they are palindrome.
 */
 class Solution {
   constructor() {
    this.count = 0
    this.palindromeSet = {}
   }

   isPalindrome(input) {
    let flag = true;
    let low = 0
    let high = input.length - 1
    while(low < high) {
      if(input[low] === input[high]) {
        low++;
        high--;
        continue
      } else flag = false;
      break;
    }
    return flag
   }

   palindromSubsequencesCount(input, output) {
     this.palindromicSubsequences(input, output)
     return this.count
   }

    palindromicSubsequences(input, output) {
      if (input.length === 0) {
        if(output) {
          if(this.isPalindrome(output)) {
            this.count++
            this.palindromeSet[output] = 1
          }
        }
        return
      }
      this.palindromicSubsequences(input.substring(1), output);
      this.palindromicSubsequences(input.substring(1), output + input[0]);
    }
}


const solution = new Solution()
const output = ''
const input = 'abc'
solution.palindromSubsequencesCount(input, output)
