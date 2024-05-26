/**
 * Array declaration -- let arr = [1,2,3,45]
 * Mix data type  -- [true , 5 , [5,2] , "Namaste"]
 * Its is a object 
 * Resizeable 
 * stores collection of multiple items  under single item 
 * its indexing starts from zero 
 * its create a shallow copy -- same refrence -- heap 
 * deep copy -- just a copy remember stack
 */
let arr = [1,2,3,45] // elements -- it can have mulltiple data types 
// accessing indexing 
console.log(arr[2]);

// array methods 
/**
 * add element 
 */
arr.push(6);

// removes last element  -- pop 
console.log(arr.pop());

// unshift -- adds at begining 
console.log(arr.unshift(9))

// shift removes that 9 
arr.shift()
console.log(arr);




/**
 * arr.includes -- boolean 
 * arr.indexOf(5) -- -1 if it dosent exists , else index of that array 
 * arr.join() -- adds allelement into a string just data type is changed to string 
 */

const newArr = arr.join()
console.log(newArr);
console.log(typeof newArr); // string 

/**
 * slice -- no changes in original array
 * splice -- brings changes in origin al array by deleting it , range is included 
 */

console.log(arr);
// slice 
console.log("SLICE");
console.log(arr.slice(1,3))
console.log(arr);

// splice 
console.log("SPLICE");
console.log(arr.splice(1,3))
console.log(arr);


const arr1 = [1,2,3,4]
const arr2 = [4,5,6]
arr1.push(arr2) // simply pushing a array inside a array 
console.log(arr1)

const allArrays = arr1.concat(arr2) // returns a new array 
console.log(allArrays)

// spread operator 
const allNewArray = [...arr1,...arr2]
console.log(allNewArray);

const anotherArray  = allNewArray.flat() // returns array all in one 
console.log(anotherArray);

console.log(Array.isArray("Namaste")); // checks wether its a arry or not 
console.log(Array.from("Namaste")); // converts it into a array 
console.log(Array.from({name:"Namaste"})); // returns empty array , tells wwether it will make array of key or value 


// convert multiple value into single array 

const  a = 29
const b  = 56
const c = 55789

console.log(Array.of(a,b,c)) // returns a new array from a set of elements 


