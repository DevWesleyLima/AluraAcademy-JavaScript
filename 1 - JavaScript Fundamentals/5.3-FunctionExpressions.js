/*
 *  Function Expressions
 */

//  1st Example
const sum = function(value1, value2){return value1 + value2;}

console.log(sum(1, 1));

//  2nd Example
console.log(showUp());

function showUp()
{
    return `Hello!!!`;
}

//  3rd Example - Hoisting

//  console.log(sum2(1, 1)); // Hoisting doesn't work!
const sum2 = function(value1, value2){return value1 + value2;}

console.log(sum2(1, 1));