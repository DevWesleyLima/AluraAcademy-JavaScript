/*
 *  Truthy and Falsy
 */

//  1st Example
console.log(0 == false);
console.log(`0` == false);
console.log(`` == false);

console.log(1 == true);
console.log(`1` == true);
console.log(`********************`);

//  2nd Example
let myVar;
let varNull = null;

console.log(myVar); // Return undefined 
console.log(varNull); // Return null

console.log(typeof myVar); // Return undefined
console.log(typeof varNull); // Return object

console.log(`********************`);

//  3rd Example
let number = 3;
let text = `Alura`;

console.log(number);  
console.log(text); 

console.log(typeof number); // Return number
console.log(typeof text); // Return string