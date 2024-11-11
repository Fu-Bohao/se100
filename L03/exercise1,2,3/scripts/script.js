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

console.log((parseFloat(DayOneClosingPrice) + parseFloat(DayTwoClosingPrice)) / 2)

//Ex7
const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

let sum = 0;
for (let i = 0; i < TSLAClosingPrices.length; i++) {
    sum += TSLAClosingPrices[i];
}
average = sum / TSLAClosingPrices.length;
console.log(average);
