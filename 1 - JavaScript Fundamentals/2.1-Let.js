/*
 *  Let
 */

//  1st Example
let objectType = `rectangle`;
let height = 5;
let width = 7;
let area;

if (objectType === `rectangle`)
{
    area = height * width;
}
else 
{
    area = (height * width) / 2;
}

console.log(`Area: ${area}m²`);