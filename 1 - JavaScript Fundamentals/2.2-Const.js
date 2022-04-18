/*
 *  Const
 */

//  1st Example
const objectType = `triangle`;
const height = 5;
const width = 7;
let area = 0;

if (objectType === `square`)
{
    area = height * width;
}
else 
{
    area = (height * width) / 2;
}

console.log(`Area: ${area}m²`);