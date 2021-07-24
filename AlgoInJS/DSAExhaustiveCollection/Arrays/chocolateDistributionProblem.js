/**
 * [GFG ACCEPTED]
 * Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet.
 * Each packet can have a variable number of chocolates.
 * There are M students, the task is to distribute chocolate packets among M students such that:
 * 1. Each student gets exactly one packet
 * 2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.
 */

// const A = [3, 4, 1, 9, 56, 7, 9, 12]
// const n = A.length
// const m = 5
// Ans: 6

const A = [7, 3, 2, 4, 9, 12, 56]
const n = A.length
const m = 3
// Ans: 2

function chocolateDistributionWithinDifference(a, n ,m) {
  a.sort( (x, y) => x - y )
  let mTracker = m - 1
  let minDiff = a[mTracker] - a[0]
  for (let i = 0; i < n; i++) {
    if( mTracker > n ) break
    if(a[mTracker] - a[i] <  minDiff) minDiff = a[mTracker] - a[i]
    mTracker++
  }
  return minDiff
}

console.log('Required minimum difference is ', chocolateDistributionWithinDifference(A, n, m))