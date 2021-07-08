// Case 1 Only one element repeated one times

const nums = [1,1,1,1]

function duplicate (nums) {
  const n = nums.length - 1
  let sumOfIntegers = 0
  for (let index = 0; index < nums.length; index++) {
    sumOfIntegers += nums[index];    
  }
  return sumOfIntegers -  (n*(n+1) / 2)
}

console.log('Answer is ', duplicate(nums) )

// Case 2, duplicate with Map
// Only one element repeated multiple times
function duplicateWithMap(nums) {
  const numTracker = {}
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if( !numTracker[element] ) {
      numTracker[element] = element
    } else {
      return numTracker[element];
    }
  }
}

console.log('Answer with map is ', duplicateWithMap(nums))