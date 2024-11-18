const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below
function getBetween(prices, company) {
    let count = 0;
    for (price of prices) {
        if (price > 254 && price < 257) {
            count++
        }
    }
    console.log(`Closing price of ${company} between 254 and 257: ${count} days`);
}
getBetween(MSFTStockClosingPrices, 'MSFT');
getBetween(AAPLStockClosingPrices, 'AAPL');