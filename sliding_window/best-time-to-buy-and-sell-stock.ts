/*
 *Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * */
function maxProfit(prices: number[]): number {
  let profit = 0;

  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const newProfit = prices[right] - prices[left];

      profit = Math.max(profit, newProfit);
    } else {
      left = right;
    }

    right++;
  }

  return profit;
}
