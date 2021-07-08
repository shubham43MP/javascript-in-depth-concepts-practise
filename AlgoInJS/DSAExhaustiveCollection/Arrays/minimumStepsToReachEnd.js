/**
 * Given an array of n integers arr[] where each element represents the exact number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
  Note: Return -1 if you can't reach the end of the array.
 */


const arr = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1 ]
const n = arr.length


function minimumSteps(arr, n) {
  let tracker = 0;
  let minSteps = 0
  let lastELement = tracker[0]
  while(minSteps < n - 1  && tracker < n - 1) {
    let element = arr[tracker]
    tracker = tracker + element
    if(element <= 0 ){
      if(element === 0)  return -1
      if( element < 0) {
        if(tracker < 0 || (lastELement === Math.abs(element)) ) return -1
      }
    }
    lastELement = element
    minSteps++
  }
  return minSteps
}