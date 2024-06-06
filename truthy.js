/**
 * falsy value :
 * false 
 * 0
 * -0
 * big int 0n
 * ""
 * null 
 * undefined 
 * NaN
 */
// rest all are truthy value  


// how to check wether object is emptyor not 

const obj = {}
if(Object.keys(obj).length == 0)
    {
        console.log("Namaste");
    }
    else 
    {
        console.log("Hey Thank you so much ");
    }

    // Nullish coalesing Operator (?? : null undefined ) especially designed for null and undefined 
    let val1 ;

    val1 = 5??10
    console.log(val1);

    val1 = null ?? 10;  
    console.log(val1); // value in val1 will be 10 same with undefined 
    // special used for data base 

// ternary operator 
/**
 * condition ? true : false 
 */