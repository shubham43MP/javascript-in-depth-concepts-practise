/**
 * Given strings str1 and str2. The task is to find if str1 is a substring in the shuffled form of str2 or not.
 * Print “YES” if str1 is a substring in shuffled form of str2 else print “NO”.
 */


/**
 *
 * @param {TInput}
 * @returns
 * YES or NO based on shuffled logic
 *
 * T(n) = O(str1.length + str2.length)
 *
 * S(n) = O(str1.length)
 */
const shuffleCheck = ({ str1, str2 }) => {
  if ( str1.length > str2.length ) return 'NO'
  const strMapper = {}
  for (let k = 0; k < str1.length; k++) {
    if(strMapper[str1[k]]) {
      strMapper[str1[k]]++
    } else {
      strMapper[str1[k]] = 1
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if(strMapper[str2[j]]) {
      if(strMapper[str2[j]] === 1) {
        delete strMapper[str2[j]]
        continue
      }
      strMapper[str2[j]]--
    }
  }

  if(Object.keys(strMapper).length === 0) return 'YES'
  return 'NO'
}

// const str1 = "onetwofour"
// const str2 = "hellofourtwooneworld"

const str1 = "roseyellow"
const str2 = "yellow"

console.log('Shuffle Check', shuffleCheck({str1, str2}))
