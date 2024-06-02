/**
 * Lets learn Function in JAVA SCRIPT 
 */

function name(){
    console.log("Namaste")
}
/**
 * name - this is just function refrence 
 * name()- this is function execution 
 */
 // no need to pre define data type in function parameter 
 // how to give default value in parameter 
function addTwoNumber(a=10,b=52){
    console.log(a+b);
}
const result = addTwoNumber(5) // 3 and a are arguments 
console.log(result); // undefined  , function is not returning anything  

// when it not sure how many parameters are given 

function calculateCartPrice(...num1){ // rest operator when used here 
    return num1;

}

console.log(calculateCartPrice(500,200)); // return in array form 

// variable can hold function also 
const addTwo = function(num)
{
    return num+5
}
console.log(addTwo(5));

// arrow function and THIS keyword 

/**
 * This keyword is use to refer to current context 
 */

const newObj = {
    username:"hoBabu",
    course:"B.Tech",
    welcome: function()
    {
        console.log(`${this.username}, welcome`);
        console.log(this); // current context is this object 
    }
}

console.log(newObj.welcome());
console.log(this); // current context is empty in node enviroment 
/**
 * in browser it will refer to window 
 * browser global object is window 
 */

function code(){
   let username1 = "babu"
 //    console.log(this); // it will print something 
    console.log(this.username1); // it will print undefined 
    /**
     * in function it is not used as same as in object  
     */
}
code()

/**
 * arrow function => remove function name, after () use => 
 */

const chaiAurCode = /*funxtion*/ () => {
    let myName = "hoBabu"
    console.log(this.myName); // again it will print undefined 
}
chaiAurCode()

const turuLove = ()=> (num1+num2)

/**
 * Note -- if you are {} then use return statements  // ecplicit return 
 *         if u are using () , no need of using return statements  // implicit return n
 */

