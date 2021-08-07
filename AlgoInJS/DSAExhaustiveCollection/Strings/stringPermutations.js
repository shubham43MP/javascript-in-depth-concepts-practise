/**
 * Given a string S. The task is to print all permutations of a given string.
 * O(n! * n)
 * O(n)
 *
 * Splitting the substrings
 */

class Solution {
  constructor() {
    this.total = 0
  }

  printTotal() {
    console.log('Total Permutations are => ', this.total)
  }

  stringPermutations(s, answer) {
    if(s.length === 0){
        this.total++
        console.log(answer);
        return;
    }
    for(let i=0; i<s.length; i++)
    {
        const ch = s[i];
        const left_substr = s.substr(0,i);
        const right_substr = s.substr(i+1);
        const rest = left_substr + right_substr;
        this.stringPermutations(rest , answer+ch);
    }
  }
}


const solution = new Solution()
solution.stringPermutations('ABCD', '')
solution.printTotal()
