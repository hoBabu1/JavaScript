/**
 * IIFE 
 * Immeditaely Invoked Functn expression
 * As sson as we write function and want to execute it as soon as program runs 
 * save from global scope pollution 
 */

// named iife 
(function greeting(){
    console.log("Namaste");
})(); // for ending it 

// arrow function 
// unnamed iife 

(() =>{
    console.log("Namaste");
})()