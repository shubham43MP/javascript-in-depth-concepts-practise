/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.



Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

/**
 *
 * T(n) = NLogN
 * S(n) = S(N)
 */
function singleNumber(nums = []) {
  nums.sort((a,b)=>a-b);
  for(let i=0;i<nums.length-1;i++){
      if(nums[i] != nums[i+1]) return nums[i];
   }
   return -1;
}

/**
 * T(n) = O(n)
 * S(n) = S(1)
 */
function singlieNumberXOR (nums){
  let res = 0;
  for(let i=0;i<nums.length-1;i++){
      res  = res ^ nums[i];
   }
   return res;
}
console.log('Sorting Method', singleNumber([4,1,2,1,2]))
