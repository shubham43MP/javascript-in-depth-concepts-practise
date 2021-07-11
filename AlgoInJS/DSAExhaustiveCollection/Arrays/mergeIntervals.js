/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

// TCs [[1,4],[0,2],[3,5]]

const intervals = [[1,3],[2,6],[8,10],[15,18]]

function checkOverlapReturnMerged(pair1, pair2) {
  if(pair1 && pair2 && pair1[0] <= pair2[1] && pair1[1] >= pair2[0]) {
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

// Good Solution involves sorting and then doing what we were doing earlier.

function nergeIntervalsWithSorting(intervals) {
  intervals.sort()
  let index = 0;
  while( index < intervals.length ) {
    const res = checkOverlapReturnMerged(intervals[index], intervals[index+1])
    if(res.length > 0) {
      intervals.splice(index+1, 1)
      intervals[index] = res
      index = 0
    }
    else index++
  }
  return intervals  
}