/* for of Loops */
const arr = [1,2,3,4]
for (const iterator of arr) {
    console.log(iterator);
}

/**
 * Maps 
 * Holds key value Pair 
 * Remembers the oder of insertion 
 * any value can be used for key and value 
 * no duplicates 
 */

const map = new Map();
map.set("name", "aman")
map.set("age",20)
// just like key value pair 
console.log(map);

for (const key of map) {
    /**
     * [ 'name', 'aman' ]
       [ 'age', 20 ]
     */
    console.log(key);
}


for (const [key,value ]of map) {
    /**
     * name aman
       age 20
     */
    console.log(key,value);
}

// object cannot be iterated by for of loop 

const myObj = {
    java:"java",
    py:"python"
}

for (const key in myObj) {
    console.log(`value of ${key} is ${myObj[key]}`);
}

const arr1 = [1,2,3,4,5]
for (const key in arr1) {
    console.log(key); // it will print key -- 0,1,2,3,4
}


// Not possible to iterate on MAP is not iteritable 
for (const [key] in map) {
    console.log(key);
}


/* for each loop  */
const coding = ["java" , "solidity" , "Move"]
// call back function dosent have name 
coding.forEach(function /*name*/(item , index , array ) {
    console.log(item,index , array)
})

// using  arrow function 
coding.forEach((item)=>{
    console.log(item);
})

// by giving function refrence 

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)

/**************************************************************************************/

const obj = [
    {
        j:"java",
        p:"python"
    },
    {
        k:"kotlin",
        s:"solidity"
    }
]

obj.forEach((item)=>{
    for (const key in item) {
        console.log(`${key} value stored is ${item[key]}`);
    }
})

// for each loop dosent return anything 