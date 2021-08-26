/**
 * Description
 *
 * T(n) =
 * S(n)
 */

 class Solution {


  gap(input) {
    if(input <= 1 ) return 0
    return Math.ceil(input / 2)
  }

  // better solution
  /**
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @param {Number} N
   * @param {Number} M
   *
   * T(n) = O(N * M)
   * S(n) = O(1)
   *
   * Sorts arr1 and arr 2
   */
  mergeSortedArraysMethod2(arr1, arr2, N, M) {
    for (let i = 0; i < N; i++) {
      if(arr1[i] > arr2[0]) {
        const temp = arr1[i]
        arr1[i] = arr2[0]
        arr2[0] = temp
        arr2.sort( (a, b) => a-b)
      }
    }
    console.log('FINAL ANSER => ', arr1, arr2)

  }

  // Iterate 1 backwards, 1 forwards and sort each NlogN + M LogM and const space #EFFICIENT
  mergeSortedArraysMethod3(arr1, arr2, N, M) {
    let i = N-1
    let j = 0
    while(i >= 0 ) {
      if(arr[j] && (arr[i] > arr[j])) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i--
        j++
      }
    }
  }

  /**
   * @param {Array} arr1
   * @param {Array} arr2
   * @param {Number} N
   * @param {Number} M
   *
   * T(n) = O(N * log N)
   * S(n) = O(1)
   * Sorts arr1 and arr 2
   */
  mergeSortedArrays(arr1, arr2, N, M) {
    let gapVal = this.gap(N+M)
    while (gapVal >= 1) {
      let traverseInitialIndex = 0
      let traverseSecondIndex = gapVal
      let index = 0
      let i, j
      for (i = 0; i + gapVal < N; i++) {
        if (arr1[i] > arr1[i + gapVal]) {
            let temp = arr1[i];
            arr1[i] = arr1[i + gapVal];
            arr1[i + gapVal] = temp;
        }
      }
      // comparing elements in both arrays.
      for (j = gapVal > N ? gapVal - N : 0; i < N && j < M; i++, j++) {
        if (arr1[i] > arr2[j]) {
            let temp = arr1[i];
            arr1[i] = arr2[j];
            arr2[j] = temp;
        }
      }

      if (j < M) {
        // comparing elements in the
        // second array.
        for (j = 0; j + gapVal < M; j++) {
          if (arr2[j] > arr2[j + gapVal]) {
              let temp = arr2[j];
              arr2[j] = arr2[j + gapVal];
              arr2[j + gapVal] = temp;
          }
        }
      }
      gapVal = this.gap(gapVal)
    }
    console.log('Arrays sorted? => ',arr1, arr2)

  }
}

const arr1 = [1, 3, 5, 7]
const arr2 = [0, 2, 6, 8, 9] // {0, 1, 2, 3} {5, 6, 7, 8, 9}
const N = arr1.length
const M = arr2.length

// const arr1 = [10, 12]
// const arr2 = [5, 18, 20] // {5, 10} {12, 18, 20}
// const N = arr1.length
// const M = arr2.length

// const arr1 = [1, 5, 9, 10, 15, 20]
// const arr2 = [2, 3, 8, 13] // {5, 10} {12, 18, 20}
// const N = arr1.length
// const M = arr2.length

// const arr1 = [10]
// const arr2 = [2, 3] // {5, 10} {12, 18, 20}
// const N = arr1.length
// const M = arr2.length

const solution = new Solution()
solution.mergeSortedArrays(arr1, arr2, N, M)
solution.mergeSortedArraysMethod2(arr1, arr2, N, M)
