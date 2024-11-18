function getBetween() {
    const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
    
    // Write your code below
    let count = 0;
    for (prices of MSFTStockClosingPrices) {
        if (prices > 254 && prices < 257) {
            count++
        }
    }
    console.log(`Number of closing prices between 254 and 257 is ${count}`);
}

getBetween();