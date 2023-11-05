//Take a sentence as an input and reverse every word in that sentence.
//a. Example - This is a sunny day > shiTTake a sentence as an input and reverse every word in that sentence.

function reverseWords(sentence) { //function to reverse a sentence
    const words = sentence.split(' ');
    const reversedWords = [];//create an array to store reversed word
     for (const word of words) {
         const reversedWord = word.split('').reverse().join('');
         reversedWords.push(reversedWord);
     }
    
     const reversedSentence = reversedWords.join(' '); //to join a words
 
     return reversedSentence;
 }
 const inputvalue = "This is a sunny day";
 const output = reverseWords(inputvalue);
 console.log("Reversed Sentance : "+output);
//////////////////////////////////////////////////////////////////////////////////////////
//Perform sorting of an array in descending order.
const numbers = [5, 2, 9, 1, 5, 6];
const stud=["abinaya","lijo","divya","shivani"]

const decending=numbers.sort().reverse(); //to sort number array
const decending_names=stud.sort().reverse(); //to sort string array

console.log(decending); // Output: [9, 6, 5, 5, 2, 1]
console.log(decending_names); //Output: [ 'shivani', 'lijo', 'divya', 'abinaya' ]
