// for each loop dosent return something , so incase if we want to return something then we can use filter
const myNum = [1,2,3,4,5,6,78]
// also takes call back function
const num = myNum.filter((nums)=>{
    return nums>4
})

console.log(num);

/**
 * filter -- myNym.filter(callBackFunction => condition)
 * 
 * similar like for each but returns value 
 * if u want to same thing by for each u can do it by creating sepearate array and then checking condition and pushing values into it 
 */

console.log("Namaste");
myNum.forEach((value,index)=>{
    myNum[index]=value+10;
})
console.log(myNum);

// doing it by map() same to same like filter 
const vLL = myNum.map((value)=>(value+10))
console.log(vLL);
// chaining -- using function after function .map().filter...etc 
console.log("***********************************************************");
const myValues = [1,2,3,4,5,6,7,8,9]
const values = myValues.map((num) =>
    (num+10)
).map((bk)=>(bk+1))

console.log(values);

/**
 * reduce 
 */

const ar2 = [1,2,3,4]
const initialValue = 0;

const val = ar2.reduce((accumulator , currVlaue)=>(accumulator+currVlaue),initialValue)
console.log(val);

// usually used in shopping cart  