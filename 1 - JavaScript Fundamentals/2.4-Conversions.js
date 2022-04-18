/*
 *  Conversions
 */

//  1st Example
const number = 456;
const stringNumber = `456`;

// >>> Bool Check Type
console.log(number === stringNumber);
console.log(number == stringNumber);

console.log(number + stringNumber);
// >>> Implicit Conversion
console.log(number + Number(stringNumber));
console.log(`********************`);

//  2nd Example
const number2 = 456;

// >>> Explicit Conversion
const stringNumber2 = Number(`456`);

console.log(number2 + stringNumber2);