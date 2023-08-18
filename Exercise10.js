const longWord = "synesthesia";

const wordLength = longWord.length;
console.log(`${longWord} has a length of ${wordLength}`)

const firstThreeLetters = longWord.slice(0, 3) //we want the first three letters, so indices 0, 1, and 2
console.log(`The first three letters of ${longWord} are ${firstThreeLetters}.`)

const someMiddleLetters = longWord.slice(2, 7); //will start at index 2 and end before index 5 total characters
console.log(`A middle portion of ${longWord} is ${someMiddleLetters}.`)

const fifthLetter = longWord.charAt(4); //remember that indexing starts at 0, so the 5th letter is at index 4
console.log(`The fifth letter of ${longWord} is ${fifthLetter}.`)

const positionOfFirstE = longWord.indexOf("e"); //there are multiple e's, but indexOf finds the position of the first one
console.log(`The index of the first e in ${longWord} is ${positionOfFirstE}.`)

const newWord = longWord.replace("syn", "an"); //should result in the word 'anesthesia'
console.log(`After replacement, ${longWord} becomes ${newWord}.`);

/*Based on a given user email address, perform the following tasks:
*Create a username for the user that is the email address up to (but not including) the @ symbol. 
*Create a new email for the user that replaces their old domain with 'codecorps.com'.
*Create a temporary password for the user that is the first five letters of their username followed by the length of their original email address.*/

const emailAddress = "johnsmith@gmail.com";

const emailLength = emailAddress.length;
console.log(`The length of the email address is ${emailLength} characters.`);

const indexOfAt = emailAddress.indexOf("@");
console.log(`The @ symbol is at position ${indexOfAt}`);

const username = emailAddress.slice(0, 9);
console.log(`The new username is ${username}`);


// The oldDomain code has been provided for you, just make sure you understand what it’s doing
const oldDomain = emailAddress.slice(indexOfAt + 1) //if the @ symbol is at position n, then the old domain starts at position n+1 and goes to the end of the string.  
console.log(`The old domain was ${oldDomain}`);

const newDomain = "codecorps.com";
const newEmailAddress = emailAddress.replace(oldDomain, newDomain)
console.log(`The new email address is ${newEmailAddress}`);

const tempPassword = username.slice(0, 5) + emailLength
console.log(`The user’s temporary password is ${tempPassword}`);