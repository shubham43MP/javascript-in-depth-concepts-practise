/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

// TCs [[1,4],[0,2],[3,5]]

const intervals = [[1,4],[0,2],[3,5]]

function checkOverlapReturnMerged(pair1, pair2) {
  if(pair1[0] <= pair2[1] && pair1[1] >= pair2[0]) {
    return [Math.min(pair1[0], pair2[0]), Math.max(pair2[1], pair1[1])]
  }
  return []
}


// With N*N Complexity
function mergeIntervals(intervals) {
  let index = 0  
  for (let index = 0; index < intervals.length; index++) {
    for (let innerIndex = index + 1; innerIndex < intervals.length; innerIndex++) {
      const element = intervals[index];
      const nextElement = intervals[innerIndex]
      const res = checkOverlapReturnMerged(element, nextElement)
      if(res.length > 0) {
        intervals.splice(innerIndex, 1)
        intervals[index] = res
        innerIndex = index
      }
      continue
    }
  }
  return intervals
}