/**
 * Everything in java script happens inside a execution context 
 * 
 * Execution context is like a big box 
 * It has two component in it - memory and code 
 * memory/variable enviroment  -- place where all variable and function are stored in key value pair 
 * code/thread of execution - place where code is executed line by line -- one line at a time 
 */

/**
 * Java Script is a synchronous single threaded language 
 * synchronous single threaded -- js can execute only one command at a time in a sepcific order 
 */

/**
 * what happens when younrun a java script program ? 
 * -- an execution context is created . 
 * 
 */

let n = 2 
function square(num){
    let ans = num*num
    return ans;
}
let sq = square(n);
let sq2 = square(5);
/**
 * How above code is executed?
 * A global execution context is created -- it will have two component (memory and code) 
 * It occurs in two phase -- memory creation phase and code execution phase 
 * 
 * First phae -- Memory creation phase
 * Java script will allocate memory  to all variable and function 
 * like this : n:
 *             square: 
 *             sq
 *             sq2
 *  what will be stored in square in function ? 
 * It stores whole function code  
 * what does it stores in n,sq, sq2 ? 
 * It stores undefined 
 * 
 * 
 * second phase -- code execution phase 
 * once again it runs through whole program line by line 
 * as soon as it executes let n = 2 (line 21)
 * Now in second phase value of n = 2 is defined instead of undefine 
 * when it encounters line 22 to 25 there is nothing to execute. 
 * so it will come down to line 26 
 * in line 26 we haved invoked a function 
 * when function is invoked, a new execution context is created just like before
 * it will have two component that is memory and code 
 * repeat the process ....... again there will be two phase - memory creation and code execution 
 * memory willbe allocated to num and ans and code will be executed  
 * 
 * whole function execution will be deleted as soon as it returns to main global execution context 
 * 
 * In line 27 
 * again function is invoked --- repeat the process 
 * 
 * when all things are done 
 * global execution is deleted 
 * 
 * Everything is managed by call stack 
 * Call stack maintains the order of execution of execution context 
 */

/************************************************************************************** */

/**
 * Hosting 
 * 
 * hosting in java script is the phenomena in by which u can access before initializing it 
 * 
 * not defined and undefined both are different  
 */

var x = 1 ;
a();
b();
console.log(x);
function a()
{
    var x = 4;
    console.log(x);
}
function b()
{
    var x = 67;
    console.log(x);
}
// output 4 , 67 , 1

/**
 * Shortest JS program -- Empty File 
 * As soon as u run a program a global execution is created.
 * Every browser has different JS engine -- like chrome have V8 
 * When a global execution is created -- window objec tis created by V8 , it might be different for different browser 
 * 
 * Basically window is a global object which is created along global execution context .
 * At global level (this === window)
 * 
 * what is global space ? 
 * anything which is not inside any function, is inside global scope 
 * 
 * var a = 10
 * console.log(a)
 * console.log(this.a)
 * console.log(window.a)
 */