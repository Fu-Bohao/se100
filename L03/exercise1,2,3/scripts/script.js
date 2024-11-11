//Ex1
console.log("Hello World!");

//Ex2
const stockPrice = 300;
console.log(stockPrice);

//Ex3
let money = 6000;
money += 3000;
console.log(money);
money *= 3;
console.log(money);

//Ex4
const companyName1 = "Amazon";
const companyRating = 5;

console.log(`${companyName1} has a customer satisfaction rating of ${companyRating}`);

//Ex5
const companyName2 = "Metaa";
let slicedCompanyName = companyName2.substring(0, 4);
console.log(slicedCompanyName);
console.log(slicedCompanyName.toUpperCase());

//Ex6
const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice = "84.22";

console.log((parseFloat(DayOneClosingPrice) + parseFloat(DayTwoClosingPrice)) / 2);

//Ex7
const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52];

let sum = 0;
for (let i = 0; i < TSLAClosingPrices.length; i++) {
    sum += TSLAClosingPrices[i];
}
average = sum / TSLAClosingPrices.length;
console.log(average);


//Ex8
const AAPLCurrentBar = {
    open: 81.12,
    high: 82.59,
    low: 80.09,
    close: 84.71
}

const AAPLPrevBar = {
    open: 81.02,
    high: 82.49,
    low: 79.09,
    close: 83.71
}

// Write your code below
console.log((AAPLPrevBar["open"] + AAPLPrevBar["close"]) / 2)
console.log((AAPLCurrentBar["open"]
    + AAPLCurrentBar["close"]
    + AAPLCurrentBar["high"]
    + AAPLCurrentBar["low"]) / 4)
console.log(Math.max(
    AAPLCurrentBar["high"],
    AAPLCurrentBar["open"],
    AAPLCurrentBar["close"]
))
console.log(Math.min(
    AAPLCurrentBar["low"],
    AAPLCurrentBar["open"],
    AAPLCurrentBar["close"]
))


//Ex10
const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}

// Write your code below
if (stockOHLC["open"] > stockOHLC["close"]) {
    console.log("Stock is bearish")
} else if (stockOHLC["open"] < stockOHLC["close"]) {
    console.log("Stock is bullish")
} else {
    console.log("Stock is neutral")
}