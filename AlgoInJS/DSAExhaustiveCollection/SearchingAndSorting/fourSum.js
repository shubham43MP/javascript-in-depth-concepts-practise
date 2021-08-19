/**
 * Four Sum and unique quadruples
 *
 * T(n) = O(N3)
 * S(n) = O(N2)
 */

 class Solution {

  checkIfArrayExists(result, newRes) {
    let exists = false
    for (let i = 0; i < result.length; i++) {
      for(let j = 0; j < 4; j++) {
        if(newRes[j] === result[i][j]) {
          if( j === 3 ) return true
          continue
        }
        break
      }
    }
    return exists
  }

  fourSum(arr, n, k) {
    arr.sort( (x, y) => x - y) // Merge Sort
    let result = []
    for (let i = 0; i < n - 3; i++) {
      for (let j = i + 1; j < n - 2; j++) {
        let low = j + 1
        let high = n - 1
        const remainingSum = k - (arr[i] + arr[j])
        while(low < high) {
          if(arr[low] + arr[high] === remainingSum) {
            const quadRupleExists = this.checkIfArrayExists(result, [arr[i], arr[j] ,arr[low], arr[high]])
            if(!quadRupleExists) result.push([arr[i], arr[j] ,arr[low], arr[high]])
            low++ // optional for now
            continue
          }
          if(arr[low] + arr[high] > remainingSum) {
            high--
            continue
          }
          if(arr[low] + arr[high] < remainingSum) {
            low++
            continue
          }
        }
      }
    }
    if(result.length === 0) return -1
    return result
  }

  checkEntryExists(hashEntry, newEntry) {
    if(hashEntry.length === 0) return false
    for (let i = 0; i < hashEntry.length; i++) {
      const element = hashEntry[i];
      if(element[0] === newEntry[0]) {
        if(element[1] === newEntry[1]) {
          return true
        }
      }
    }
    return false
  }

  /**
   *
   * @param {Array} arr
   * @param {Number} n
   * @param {Number} k
   *
   * T(n) = O(N2)
   *
   * S(n) = O(N2)
   */
  fourSumHashed(arr, n, k) {
    const hash = {}
    arr.sort((a,b) => a-b)
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const sum = arr[i] + arr[j]
        if(hash[sum]) {
          const exists = this.checkEntryExists(hash[sum], [arr[i], arr[j]])
          if(!exists) hash[sum].push([arr[i], arr[j]])
          continue
        } else {
          hash[sum] = [[arr[i], arr[j]]]
        }
      }
    }
    // Object.keys(hash) // This hash can be used to find the pairs
    console.log('HASH => ', hash)
  }
}


const solution = new Solution()
const arr = [0,0,2,1,1]
const n = arr.length
const k = 3

// const arr = [10,2,3,4,5,7,8]
// const n = arr.length
// const k = 23

// const arr = [77, 15, 93, 35, 86, 92, 49, 21, 62, 27, 90, 59, 63, 26, 40, 26, 72, 36, 11, 68, 67, 29, 82, 30, 62, 23, 67, 35, 29, 2, 22, 58, 69, 67]
// const n = arr.length
// const k = 887
console.log('Four Sum quadruples are => ', solution.fourSum(arr, n, k))
console.log('Four Sum quadruples are => ', solution.fourSumHashed(arr, n, k))
