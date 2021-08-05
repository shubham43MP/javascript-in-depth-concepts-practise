/**
 *Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1?
(eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false)
 */

function checkRotation(str1, str2) {
  return (str1 + str1).includes(str2)
}

console.log('$$$$$$$$$', checkRotation('ABCD', 'CDAB'))
