let num1 = 5000000000;
console.log(num1);

// output will be specifically in NUMBER 
let num2 = new Number(100);
console.log(num2);

// convert number to string and find its length 
console.log(num1.toString.length)

// usuallly use din e commerece website 
console.log(num1.toFixed(2))

// to count number of zeros or convert it into 1,000,000
console.log(num1.toLocaleString('en-IN'));
 

/**
 * Some of the common used function 
 * ciel 
 * floor 
 * random 
 * max 
 * min
 */
console.log(Math.round(4.499))

/**
 * Random usually value lies between 0 - 1 
 * What if i want number in range like 10-20
 */

const min = 11 
const max = 12
console.log("Namaste ji ")
console.log((Math.random()*(max-min+1))+min)
