/**
 * LEETCODE ACCEPTED
 * The legendary count and say problem
 * countAndSay(1) = "1"
 * countAndSay(2) = say "1" = one 1 = "11"
 * countAndSay(3) = say "11" = two 1's = "21"
 * countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */

class Solution {

  counter(result) {
    let ans = ''
    let counter = 1
    let lastValue = result[0]
    for (let k = 1; k < result.length; k++) {
      if(result[k] === result[k - 1]) {
        counter++
      } else if( result[k] !== result[k - 1]) {
        ans += `${counter}${result[k - 1] ? result[k - 1]: ''}`
        counter = 1
      }
      lastValue = result[k]
    }
    return `${ans}${counter}${lastValue}`
  }

  countAndSay(n) {
    let result = '1'
    for (let j = 2; j <= n; j++) result = this.counter(result)
    return result
  }
}

const solution = new Solution()
console.log('FINAL RESULT ==> ', solution.countAndSay(5))
console.log('TESTING ==> ', solution.counter('3322251'))
