const a = 4;
const b = 3; 
let c = 2*a + b;

console.log("The value of c is");
console.log(c);

const cookiesInBox = 12;
let numberOfBoxes = 4;
let totalCookies = cookiesInBox * numberOfBoxes;

let phoneBill = 55.00;
let wifiBill = 30.00;
let tvBill = 14.99;

let billsTotal = phoneBill + wifiBill + tvBill;

console.log("The total number of cookies is", totalCookies);
console.log("I owe", billsTotal, "in bills this month");

const mikesMeal = 23.99
const mikesDrinks = 24.00
const juansMeal = 26.49
const juansDrinks = 18.00
const sheasMeal = 21.99
const sheasDrinks = 10.00

const mealsTotal =  mikesMeal + juansMeal + sheasMeal;
const drinksTotal = mikesDrinks + juansDrinks + sheasDrinks;

const subtotal = mealsTotal + drinksTotal;

const tax = subtotal * 0.1
const tip = subtotal * 0.2

const billTotal = subtotal + tax + tip
const splitAmount = billTotal / 3

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");