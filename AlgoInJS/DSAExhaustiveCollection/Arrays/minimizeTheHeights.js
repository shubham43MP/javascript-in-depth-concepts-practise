/**
 * Given heights of n towers and a value K. We need to either increase or decrease the height of every tower by k (only once)
  where k > 0. The task is to minimize the difference between the heights of the longest and the shortest tower after
  modifications and output this difference.
 */

  const arr = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1].sort( (x, y) => x-y )

  let N=4
  const K = 2;

  arr.sort( (x, y) => x-y )
  console.log('ARra ==> ', arr)
  let min = 0;
  let max = 0;
  let res = arr[N - 1] - arr[0];

  for (let index = 1; index < N; index++) {
        if(arr[index] >= K){
          max = Math.max(arr[index-1] + K, arr[N-1]-K)
          min = Math.min(arr[index] - K, arr[0] + K)
          res = Math.min(res, max-min)
        } else{
          continue;
        }
  }