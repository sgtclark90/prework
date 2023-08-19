let temperature = 90;
let day = "Saturday";

//Only if both conditions are true will the code in the curly braces will be executed
if (temperature >= 80 && day == "Saturday") {
    console.log("Let's go to the beach!");
} else {
    console.log("Sorry we can't go to the beach today.");
}

//As long as one of the conditions is true, the code in the curly braces will be executed
if (day == "Saturday" || day == "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("Not the weekend yet I'm afraid.");
}

//Think of the NOT operator like it's Opposite Day. If the condition in the parentheses is FALSE, the NOT operator turns it true, and then the code will be executed.
//If the condition in the parentheses is TRUE, the NOT operator turns it to false and the code will not be executed.
if (!(temperature > 32)) {
    console.log("Careful! It might snow!");	
} else {
    console.log("At least it's above freezing!");}



    /* Siobhan is in the process of creating a brand new word game that she hopes will be super popular on the app store. 
Before she can put the app up though, she needs a way to determine whether or not a word will work for her game. 
She already knows the criteria, but needs your help to finish implementing the code. The criteria are:
*All words must be longer than 5 characters but shorter than 10 characters
*Words cannot start with 'X' or 'Q'
*If a word is exactly 7 characters long, it must end in s 


Hint:You will need to check if the last letter is equal to s. If a string has n characters, then it’s last letter is at what index?*/

const word = "princess"

if (word.length <= 5 || word.length >= 10) 
{console.log("This word is not an acceptable length.");}
else if (word[0] === 'X' || word[0] === 'Q') 
{console.log("This word starts with a prohibited letter.");}
else if (word.length == 7 && word[6] !== 's') 
{console.log("Sorry a 7 letter word has to end in s.");}
else 
{console.log("This word works!");}