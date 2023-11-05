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

