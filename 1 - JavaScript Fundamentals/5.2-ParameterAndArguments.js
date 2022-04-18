/*
 *  Parameter and Arguments
 */

//  1st Example
function sum(value1, value2)
{
    return value1 + value2;
}

console.log(sum(2, 2));
console.log(sum(245, 20));
console.log(sum(-500, 60));
console.log(`********************`);

//  2nd Example
function getPeepData(name, age)
{
    return `My name is ${name} and I am ${age}yo!!!`  
}

console.log(getPeepData(`Juliana`, 40));
console.log(`********************`);

//  3rd Example
function multiply(value1 = 1, value2 = 2)
{
    return value1 * value2;
}

console.log(multiply(sum(4, 5)));