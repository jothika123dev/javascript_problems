//////////////////////////////////////////////////////////////////////////////////////////
//Perform sorting of an array in descending order.
const numbers = [5, 2, 9, 1, 5, 6];
const stud=["abinaya","lijo","divya","shivani"]

const decending=numbers.sort().reverse(); //to sort number array
const decending_names=stud.sort().reverse(); //to sort string array

console.log(decending); // Output: [9, 6, 5, 5, 2, 1]
console.log(decending_names); //Output: [ 'shivani', 'lijo', 'divya', 'abinaya' ]
