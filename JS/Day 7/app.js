// 'this' keyword
// 'this' keyword is used to refer current object.
// try and catch
try {
    // code to be executed
    } catch (error) {
        // code to be executed if error occurs
        }
        // throw
        // throw is used to throw an error.
//

console.log("hello")
try{
    console.log(a);
}catch(err){
    console.log("Caught error ");
    console.log(err);
}
console.log("hello2");

//MISCELLANEOUS TOPICS

//1. Arrow Function
// Arrow function is a shorthand for function expression.
//const func=(arg1,arg2,..)=>{function defination}
const sum=(a,b)=>{
    console.log(a+b);
}
sum(5,6);

const cube=n=>{
    return n**3;
} //for single argument u may or maynot use parenthesis
console.log(cube(5));

const hello=()=>{console.log("hey Rohan");};
hello();

//Arrow Function Implicit Return
//If the function body contains only one expression,
// then it can be written without curly braces and the
const mul =(a,b)=>(a*b);
mul(6,5);

//set timeout
//setTimeout is used to execute a function after a specified time.
//setTimeout(function,timeout )
//setTimeout( func , 400)
console.log("hi there");

setTimeout( ()=>{
    console.log("rohan's window");
} , 5000);
console.log("welcome to");

//setInterval
//setInterval is used to execute a function at specified time intervals.
//setInterval(function,timeout )
//setInterval( func , 400)
let id1=setInterval(()=>{
    console.log("ROHHHHHHHHHAN");
},2000);
console.log(id1);
clearInterval(id1);

//this with arrow function
const student={
    name: "rohan",
    age: 20,
    marks:91,
    prop:this //global scope
    getName: function(){
        console.log(this); // calling obj
        return this.name;
    },
    getMkarks:()=>{
        console.log(this); //for arrow this is parent's scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log("ROHAN KAITAKE") // student
        },4000);
    
    }.
    getInfo2: function(){
        settimeout((function(){
            console.log("ROHAN B kaitake")
        },2000));
    }
};
const a=5 //global scope