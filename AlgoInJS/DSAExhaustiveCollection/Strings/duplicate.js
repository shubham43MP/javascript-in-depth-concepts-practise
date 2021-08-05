/**
 * Write an efficient program to print all the duplicates and their counts in the input string
 */

// Using hashing Space is O(S.length)

function stringDuplicates(s) {
  let stringMap = {}
  for (let k = 0; k < s.length; k++) {
    if(stringMap[s[k]]) stringMap[s[k]]++
    else {
      stringMap[s[k]] = 1
    }
  }
  // karlena iske baad
}
