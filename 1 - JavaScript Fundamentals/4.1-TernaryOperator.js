/*
 *  Ternary Operator
 */

//  1st Example
const minimumAge = 18;
const customerAge = 16;

if (customerAge >= minimumAge)
{
    console.log(`Customer IS authorized to buy alcohol!!!`);
}
else
{
    console.log(`Customer IS NOT authorized to buy alcohol!!!`);
}

//  2nd Example
console.log(customerAge >= minimumAge ? `Customer IS authorized to buy alcohol!!!` : `Customer IS NOT authorized to buy alcohol!!!`);
