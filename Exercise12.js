// const groceryList = ["eggs", "bread", "milk", "chicken", "apples", "carrots"];
// const getNextTime = [];

// console.log("Initially, your grocery list is", groceryList, "and your get next time list is", getNextTime);

// //you've decided you no longer want the carrots and will get them next time
// let nextTimeItem = groceryList.pop(); //removes the string "carrots" from the end of groceryList and stores it in the variable nextTimeItem

// getNextTime.push(nextTimeItem); //pushes the variable nextTimeItem, which contains the string "carrots" onto the end of the getNextTime array

// console.log("Now, your grocery list is", groceryList, "and your get next time list is", getNextTime);

// /*You also realized you have eggs at home now, but will definitely need to get more next time. Because it will be a top priority for that trip, you want to add it to the beginning of the getNextTime array*/
// nextTimeItem = groceryList.shift(); //removes "eggs" from the beginning of the grocery list, nextTimeItem was declared with let, so we can change it here for our new nextTimeItem

// getNextTime.unshift(nextTimeItem); //adds nextTimeItem, which contains "eggs", to the front of the getNextTime array

// console.log("Finally, your grocery list is", groceryList, "and your get next time list is" , getNextTime);






//You've decided to start with last night's menu and decide what adjustments to make from there
const menu = ["steak", "fish", "lobster", "chicken", "duck", "eggplant", "pork chop", "pasta"]

//You've decided to switch out the lobster at index 2 for crab and the eggplant at index 5 for lasagna
//The first replacement is done for you, add the code for the second replacement beneath it


menu[2] = "crab"
menu[5] = " lasagna"

//You've been persuaded to add beef wellington to the menu, but you really hope no one orders it so you add it to the end of the menu and hopefully no one will see.
//Conversely, you have some really great prawns that you'd like to feature. Add them to the beginning of the menu to highlight them.

menu.push("beef wellington");
menu.unshift("prawns");

//You've decided you're happy with the menu now, so it's time to split the work between your sous chefs, Nico and Maria.
//You want to assign the first half of the menu to Maria and the second half to Nico. 

//You need to know which index position is the halfway point. Determine that by finding the length of the array and dividing by 2
const halfIndex = Math.floor(menu.length / 2)

//Use the array slice() method to assign the first half of the menu to Maria
const mariasDishes = menu.slice(0, halfIndex)

//Use the array slice() method to assign the second half of the menu to Nico
const nicosDishes = menu.slice(halfIndex)

console.log("Today's final menu is", menu);
console.log("Maria will be preparing", mariasDishes);
console.log("Nico will be preparing", nicosDishes);