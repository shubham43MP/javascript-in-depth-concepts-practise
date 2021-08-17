/**
 * Given two strings where first string may contain wild card characters and second string is a normal string.
 * Write a function that returns true if the two strings match.
 * The following are allowed wild card characters in first string.
 * '*' --> Matches with 0 or more instances of any character or set of characters.
 * '?' --> Matches with any one character.
*/

 class Solution {

  /**
   *
   * @param {String} wcStr
   * @param {String} testStr
   *
   * Returns boolean whether test string matches or not with the wild card str
   */
  wildCardStringMatch(wcStr, testStr) {
    let wcStrLength = wcStr.length
    let testStrLength = testStr.length
    let i = 0;
    let j = 0;
    let matches = false
    while(i < testStrLength) {
      if(wcStr[j] === testStr[i]) {
        i++
        j++
        matches = true
      } else if (wcStr[j] === '?') {
        i++
        j++
        matches = true
      } else if( wcStr[j] === '*' ) {
        if( j === wcStrLength - 1 ) {
          matches = true
          break
        }
        while(i < testStrLength && testStr[i] !== wcStr[j+1]) {
          if(wcStr[j+1] === '?') {
            j++
            continue
          }
          if(testStr[i] !== wcStr[j+1]) {
            matches = false
            i++
          }
        }
        console.log('7ibxkjhakx', i, testStrLength)
        j++
      } else if (wcStr[j] !== testStr[i]) {
        matches = false
        break
      }
    }
    console.log('STRING MATCHING ?? ', matches)
  }
}


const solution = new Solution()
// const wcStr = 'ge?ks*k?'
// const testStr = 'geeksforgeeks' // matches
// const wcStr = 'g*ks'
// const testStr = 'geeks' // matches
// const wcStr = 'g*k'
// const testStr = 'gee' // not matches
// const wcStr = '*pqrs'
// const testStr = 'pqrst' // not matches
// const wcStr = 'abc*bcd'
// const testStr = 'abcdhghgbcd' // matches
// const wcStr = 'abc*c?d'
// const testStr = 'abcd' // not matches
// const wcStr = '*c*d'
// const testStr = 'abcd' // matches
const wcStr = '*?c*d'
const testStr = 'abcd' // matches


solution.wildCardStringMatch(wcStr, testStr)
