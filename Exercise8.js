const firstName = "Michael"
const lastName = "Clark"
const fullNameConcat = firstName + " " + lastName 
const fullNameInterp = `${firstName} ${lastName}`

//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = "32"
let faveFood = "Pizza"
let faveColor = "green"
let miniBio = `Hi, my name is ${fullNameInterp}. I am ${myAge} and my favorite food is delicious ${faveFood}. Fun fact, even though my favorite color is ${faveColor}, nothing that color belongs on ${faveFood}!`
console.log("Your mini bio is:");
console.log(miniBio);