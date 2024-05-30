/**
 * objects andd events are the most important function in JS  
 * object are declared in two ways -- literals and constructor 
 * singleton -- by constructor 
 */

// object by constructor -- only difference is its singleton 
 //Object.create()

/**
 * Object - Literals -- There is key value pair 
 */
const user = {
    name : "hoBabu", // here name is in String 
    age:20,
    "Full Name j":"hoBabu"
}
// Two ways to access it 
console.log(user.name);
console.log(user["name"])
console.log(user["Full Name j"])

// use symbol in objects 
const name = Symbol("hB")
console.log(typeof name);

const newUser = {
    name:"hoBabu",
    country:"India"
}
console.log(typeof newUser["name"]) // still its type of is string 

// for using symbol in object --  use square bracket [] and for accessing dont use "" -- Its syntax

let anotherUser = {
    name:"Sandhya ji ",
    hobby:"Badminton"
}
console.log(typeof anotherUser[name]);
// overwrite 
anotherUser.hobby = "Coding";
console.log(anotherUser["hobby"]);

// object freeze -- no more hanges 
// Object.freeze(anotherUser)

// console.log(anotherUser);

// add function in a object 
anotherUser.greetings = function()
{
    console.log("Namaste");
}

console.log(anotherUser["greetings"]); // [Function (anonymous)]
console.log(anotherUser.greetings()) 


/**
 * usually we use . notation for accessing elements from object 
 * [] access videos by this is usually asked in interview 
 */

/**
 * Object singleton
 */
const news = new Object() // singleton object thats the only defference 
console.log(news); // empty object 

news.id = 85;
news.new = "Myself";

console.log(news); // { id: 85, new: 'Myself' }
// object under object 
const regularUser = {
    email:"amanksah123@gmail.com",
    userfullname:
        {
            firstName : "ho",
            lastName:"Babu"
        }
}

console.log(regularUser["userfullname"]["firstName"]);
console.log(regularUser.userfullname?.lastName);

const obj1 = {
    1:"a",
    2:"c"
}

const obj2 = {
    4:"d0",
    5:"e"
}

// how to combine two object 
// {} empty paraenthesis  act as a target where all will be going into it 
const obj3 = Object.assign({},user , anotherUser)
console.log(obj3);

// another syntax 
const obj4 = {...user, ...anotherUser}
console.log(obj4);

// especially used in working with data base 
console.log(Object.keys(anotherUser)); // output data type is array -- it can be looped 
console.log(Object.values(anotherUser));
console.log(anotherUser.hasOwnProperty("hobby")); // returns true or false -- use it wehn u are going to access it from db 


// destructuring 
// just for making code more readable -- avoid writing candle.color 
const candle = {
    color:"Blue",
    wick:"No"
}

const {color:color} = candle
console.log(color); 


/**
 * JSON {}
 * Everything inside it is  in String 
 * {
 *    "name":"Aman"
 *      }
 *  */ 





