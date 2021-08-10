/**
 * Pattern for string matching
 *
 * T(n) = O(N2)
 * S(n) = O(1)
 */

 class Solution {
   constructor() {
     this.primeNumberForHash = 5381
     this.d = 256
   }

  /**
   * @param {String} input
   * @param {String} pattern
   * T(n) = O(N *  length of pattern)
   * S(n) = O(1)
   */
  naiveStringMatching(input, pattern) {
    const patternLength = pattern.length
    for (let k = 0; k < input.length; k++) {
      let end = k + patternLength - 1
      if(input.substring(k, end + 1) === pattern) {
        console.log('Desired index => ', k)
      }
    }
  }

  /**
   *
   * @param {String} txt
   * @param {String} pat
   * Outputs the indexes of match
   *
   * Efficient than the Naive approach and Average case is less than O(N * M)
   */
  rabinKarpAlgoStringMatch(txt, pat) {
    // This is also called rolling hash Algorithm
    let M = pat
    let N = txt.length
    let patternHash = 0
    let txtHash = 0
    let h = 1

    for(let i = 0; i < M - 1; i++)
        h = (h * this.d) % this.primeNumberForHash
    for (let k = 0; k < M - 1; k++) {
      patternHash = (this.d * patternHash + pat[k].charCodeAt()) % this.primeNumberForHash
      txtHash = (this.d * txtHash + txt[k].charCodeAt()) % this.primeNumberForHash
    }

    for (let i = 0; i <= N - M; i++) {
      if(patternHash === txtHash) {
        for(let j = 0; j < M; j++) {
            if (txt[i+j] != pat[j])
                break
        }
        console.log('Pattern found at ', i)
      }
      if(i < N-M) {
        txtHash = (this.d * (txtHash - txt[i].charCodeAt() * h) + txt[i + M].charCodeAt()) % this.primeNumberForHash
        if( txtHash < 0 ) txtHash = txtHash + this.primeNumberForHash
      }

    }
  }
}


const solution = new Solution()

/**
 * TCs
 */

// const input = "THIS IS A TEST TEXT"
// const pattern = "TEST" // 10


const input = "AABAACAADAABAABA"
const pattern = "AABA" // 10
solution.naiveStringMatching(input, pattern)
solution.rabinKarpAlgoStringMatch(input, pattern)
