/**
 * JavaScript Date objects represent a single moment in time in a platform-independent format. 
 * Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC 
 * Date is a object 
 * Month is started from ZERO 0- January 
 * if we use yyyy-mm-dd then its 01 is january 
 */

let date = new Date();
console.log(date) // 2024-05-25T11:11:47.861Z
console.log(date.toISOString()) // 2024-05-25T11:11:47.861Z
console.log(date.toJSON())  // 2024-05-25T11:11:47.861Z
console.log(date.toLocaleDateString()) // 25/5/2024
console.log(date.toDateString()); // Sat May 25 2024
console.log(date.toString()) // Sat May 25 2024 16:46:46 GMT+0530 (India Standard Time) 

let myTimeStamp = Date.now(); // gives in milli second for converting into second divide by 1000 -- for reciving decimal use maths.floor 
console.log(myTimeStamp);
console.log(date.getTime()); // gives time in milli second -- easy to compare 
console.log(date.getDay());


// customize the date by using local string 
console.log(date.toLocaleDateString('default', {weekday:"long"})) // 25/5/2024 



