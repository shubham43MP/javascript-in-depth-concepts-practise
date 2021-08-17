/**
 * [GFG ACCEPTED]
 * IsoMorphic Strings
 *
 */

 class Solution {

  /**
   *
   * @param {String} str1
   * @param {String} str2
   * @returns
   *
   * Boolean whether isomorphic or not
   */
  isIsoMorphic(str1, str2) {
    const str1Length = str1.length
    const str2Length = str2.length
    let str1Map = {}
    let str2Map = {}

    if(str1Length !== str2Length ) return false

    for (let i = 0; i < str1Length; i++) {
      const element1 = str1[i];
      const element2 = str2[i];
      if(str1Map[element1]) {
        if(!str2Map[element2]) return false
        str1Map[element1]++
        str2Map[element2]++
      }
      else {
        str1Map[element1] = 1
        if(str2Map[element2]) {
          return false
        }
        str2Map[element2] = 1
      }
    }
    return true


    console.log('MAPPSSSS => ',str1Map, str2Map, diffElementStr1, diffElementStr2)
  }
}


const solution = new Solution()
// const str1 = 'aab'
// const str2 = 'xxy' // true
// const str1 = 'aab'
// const str2 = 'baa' // false
// const str1 = 'aadc'
// const str2 = 'mmkl' // true
// const str1 = 'ACAB'
// const str2 = 'XCXY' // true
// const str1 = 'paper'
// const str2 = 'title' // true
const str1 = 'pijthbsfy'
const str2 = 'fvladzpbf' // false
console.log('Is Isomorphic => ', solution.isIsoMorphic(str1, str2))
