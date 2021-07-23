/**
 * In daily share trading, a buyer buys shares in the morning and sells them on the same day.
 * If the trader is allowed to make at most 2 transactions in a day
 * whereas the second transaction can only start after the first one is complete (Sell->buy->sell->buy)
 * Given stock prices throughout the day, find out the maximum profit that a share trader could have made
 */

const input = [2, 30, 15, 10, 8, 25, 80]

/**
 * 
 * @param {Array} input 
 * @param {Number} N 
 * @returns Number that is maximum for Buy and Sell
 * 
 * T(n) = O(N)
 * 
 * S(n) = O(N) 
 */
function buyAndSellStockBestTime(input, N) {
  let resultant = []
  for (let i = 0; i < N; i++) {
    resultant.push(0)
  }
  let max = input[N-1]
  let min = input[0]
  for (let j=N-2; j >= 0; j--) {
    const tempProfit = (max - input[j])
    if(input[j] > max) {
      resultant[j] = resultant[j+1]
      max = input[j]
      continue;
    }
    resultant[j] = Math.max(resultant[j+1], tempProfit) 
  }
  for (let k = 1; k < N; k++) {
    if(input[k] < min) {
      min = input[k]
      resultant[k] = resultant[k-1]
      continue
    }    
    resultant[k] = Math.max(resultant[k-1], (resultant[k] + (input[k] - min)))
  }
  return resultant[N-1]
}

/**
 * 
 * @param {Array} input 
 * @param {Number} N 
 * @returns 
 * 
 * Maximum Profit
 * 
 * T(n) = O(N)
 * 
 * S(n) = O(1)
 */
function buyAndSellStockBestTime2WaySimple(input, N) {
  let profit1 = 0
  let profit2 = 0
  let buy1 = Number.MAX_VALUE
  let buy2 = Number.MAX_VALUE
  for (let i = 0; i < N; i++) {
    buy1 = Math.min(buy1, input[i]);
    profit1 = Math.max(profit1, input[i] - buy1)
    buy2 = Math.min(buy2, input[i] - profit1);
    profit2 = Math.max(profit2, input[i] - buy2);
  }
  return profit2
}

console.log('Maximum Profit is ', buyAndSellStockBestTime(input, input.length))
console.log('Maximum Profit is ', buyAndSellStockBestTime2WaySimple(input, input.length))