function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        
        const profit = price - minPrice;
        
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}