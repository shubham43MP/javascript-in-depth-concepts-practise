/**
 * [GFG ACCEPTED]
 * Given a string S, find the longest palindromic substring in S.
 * Substring of string S: S[ i . . . . j ] where 0 ≤ i ≤ j < len(S).
 * Palindrome string: A string which reads the same backwards. More formally, S is palindrome if reverse(S) = S.
 * Incase of conflict, return the substring which occurs first ( with the least starting index).
 */

/**
 *
 * @param {String} s
 * @param {Number} low
 * @param {Number} high
 * @returns
 * Boolean whether string is palindrome or not
 */
const palindrome = (s, low, high) =>  {
  let flag = true;
  const subString = s.substring(low, high )
  let localLow = 0
  let localHigh = subString.length - 1
  while(localLow < localHigh) {
    if(subString[localLow] === subString[localHigh]) {
      localLow++;
      localHigh--;
      continue
    } else flag = false;
    break;
  }
  return { flag, subString}
}

/**
 *
 * @param {String} S
 * @returns
 * Longest Palindrome
 */
const longestPalindrome = (S) => {
  let palindromeIterator = 2
  const stringLength = S.length
  let maxPalindrome = S[0]

  // Sliding Window
  while(palindromeIterator < stringLength) {
    for (let k = 0; k <= stringLength - palindromeIterator + 1; k++) {
      const { flag: isPalindrome, subString } = palindrome(S, k, k + palindromeIterator + 1)
      if( isPalindrome && subString.length > maxPalindrome.length ) {
        maxPalindrome = subString
        break
      }
    }
    palindromeIterator++
  }

  return maxPalindrome
}

/**
 * rfkqyuqfjkxy => r
 * aaaabbaa => aabbaa
 * abc => a
 */
console.log('longest palindrome is => ', longestPalindrome('abc') )
