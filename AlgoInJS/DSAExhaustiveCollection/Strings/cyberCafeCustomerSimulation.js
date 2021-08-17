/**
 * Function to find Number of customers who could not get a computer
 * GFG Practise: https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/
 */

class Solution {

  /**
   *
   * @param {Number} n
   * @param {String} seq
   */
  customerSimulation(n, seq) {
    let usedResources = 0
    let unservicedCustomer = 0
    let customerMap = {}
    let unservicedMap = {}
    const seqLength = seq.length
    for (let i = 0; i < seqLength; i++) {
      const element = seq[i]
      if(customerMap[element] === 1) {
        customerMap[element] = 0
        usedResources--
      }
      else {
        if(usedResources === n) {
          if(!unservicedMap[element]) {
            unservicedMap[element] = 1
            unservicedCustomer++
          } else unservicedMap[element]--
        }
        else {
          usedResources++
          customerMap[element] = 1
        }
      }
    }
    console.log('Customers who were not able to use: ', unservicedCustomer, unservicedMap)
  }
}


const solution = new Solution()
// solution.customerSimulation(2, 'ABBAJJKZKZ') // 0
// solution.customerSimulation(3, 'GACCBDDBAGEE') // 1
// solution.customerSimulation(3, 'GACCBGDDBAEE') // 0
// solution.customerSimulation(1, 'ABCBCA') // 2
solution.customerSimulation(1, 'ABCBCADEED') // 2
