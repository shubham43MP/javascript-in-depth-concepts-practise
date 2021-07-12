/**
 * Given an arr of N integers, and an integer K, find the number of pairs of elements in
 * the array whose sum is equal to K.
 */


// Naive Brute Force Approach. T(n) = N*N, O(1)
function pairCountWithGivenSum(arr, n, k) {
  let pairCount = 0;
  for (let index = 0; index < arr.length - 1; index++) {
    for (let innerIndex = index + 1; innerIndex < arr.length; innerIndex++) {
      if(arr[ innerIndex ] + arr[index] === k) pairCount++
      else continue
    }
  }
  return pairCount
}

const arr = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1]
const k = 11

// 5ms execution time
console.log('Number of pairs is with Naive Approach is ', pairCountWithGivenSum(arr, arr.length, k))

// Efficient Approach
// Combination Approach with using Object Maps popularly Known as Hash Tables

function product_Range(a,b) {
  var prd = a,i = a;

  while (i++< b) {
    prd*=i;
  }
  return prd;
}


function combinations(n, r){
  if (n==r)  return 1;
  else {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}

function pairSum(arr, n, k) {
  const hashMap = {}
  let pairCount = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(hashMap[element] || (hashMap[element] === 0))  hashMap[element]++
    else {
        hashMap[element ] = 1
        if( 2 * element !== k) hashMap[k - element] = 0
    }
  }
  for(let i in hashMap) {
    if(hashMap[i]) {
      const remaining = k - i
      if(hashMap[remaining]) {
        if(i == remaining ) {
          if(hashMap[i] >= 2) pairCount += combinations(hashMap[i], 2)
          hashMap[i] = 0
        } else {
          pairCount += combinations(hashMap[i], 1) * combinations(hashMap[remaining], 1)
          hashMap[i] = 0
          hashMap[remaining] = 0
        }
      }
    }
  }
  return pairCount
}
console.log('Efficient approach pair count ==> ', pairSum(arr, arr.length, k)) // 1.5ms
