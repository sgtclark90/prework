const pets = ["Ozzy", "Lola", "Linus", "Max", "Sammy"];

const grades = [98, 89, 92, 92, 87, 77];

const deliciousBrusselsSproutsRecipes = []; // lists can also be empty

console.log(`The fourth pet in the array is currently ${pets[3]}.`); //remember that the fourth item is at index 3

pets[3] = "Leon"; //updates the value at index 3 in pets array

console.log(`Now the fourth pet in the array is ${pets[3]}.`);

const partialGrades = grades.slice(1, 4);
console.log(partialGrades); //observe what happens when we log an entire array