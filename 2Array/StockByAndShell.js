function stockByShell(prices) {
  // Initialize the maximum profit as 0
  let maxProfit = 0;

  // Initialize the 'buy' price as the first element of the prices array
  let buy = prices[0];

  // Loop through the prices starting from the second element (index 1)
  for (let i = 1; i < prices.length; i++) {
    // Check if the current price is greater than the 'buy' price
    if (buy < prices[i]) {
      // If yes, calculate the profit by subtracting the 'buy' price from the current price,
      // and update the 'maxProfit' to the maximum of its current value and the calculated profit.
      maxProfit = Math.max(maxProfit, prices[i] - buy);
      // Continue to the next iteration.
      continue;
    }
    // If the current price is not greater than the 'buy' price, update the 'buy' price
    // to the current price, effectively considering it as a potential buy point.
    buy = prices[i];
  }

  // Return the maximum profit obtained from the loop.
  return maxProfit;
}

// Test cases
let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];
let prices3 = [3, 1, 4, 8, 7, 2, 5];

console.log("Max Profit for prices1:", stockByShell(prices1));// output 5
console.log("Max Profit for prices2:", stockByShell(prices2)); // output 0
console.log("Max Profit for prices3:", stockByShell(prices3)); // output 7
