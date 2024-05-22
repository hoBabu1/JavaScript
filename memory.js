/**
 * There is two memory 
 * 1.Stack 
 * 2. Heap
 * 
 * -----------STACK----------------
 * prmitive data type go into stack 
 * a copy of value is passed -- which means that a any changes made in other wont reflect in original 
 * 
 * ---------HEAP----------
 * non primitive data type go into stack like obj 
 * refrence is passed 
 */

let amanInfo =  {
    name :"aman",
    class:"Btech",
    roll:45
}

let hoBabuInfo = amanInfo
hoBabuInfo.name="smartBoy"
console.log(amanInfo.name);

