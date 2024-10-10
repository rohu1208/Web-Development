function hello(){
    console.log("Hello, World!");
}
hello();
function isAdult(){
    let age = 12;
    if(age >= 18){
        console.log("You are an adult");
        }
        else{
            console.log("You are not an adult");
            }
            }

isAdult();


//dice function to roll a dice and always display the value of dice 1 to 6
function rollDice(){
    let rand=Math.floor(Math.random()*6 )+1;
console.log(rand);
}
rollDice();


// Arguments in function

function printName(name){
    console.log(name);
}

printName("rohan")

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`)

}
printInfo("rohan",21);
// printInfo(,21);  ERROR

// function to average of 3 number
function calAvg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
calAvg(10,20,30);

//function that print multiplication table of num
function printTable(n){
    for(let i=1;i<=n*10;i++){
        console.log(`${i} * ${n} = ${i*n}`)
}
}

//return
function sum(a,b){
    return a+b
}

console.log(sum(10,20)); // output 30
console.log(sum((10,5),20));

//function that return sum of numbers 1 to n
function sumOfN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
        }
        return sum;
        }

// function that return concatenation of all strings in an array
let str=["hi","bye","tie"];
function concat(str){
    let result = "";
    for(let i=0;i<str.length;i++){
        result += str[i];
        }
        return result;

}

//LEXICON SCOPE
function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
        let a=10;
}
console.log(a); //not possible
innerFunc();  //possible
}

//hoisting 
// function possible before declaration 


const greet="hi";
function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet); //lexical scope 
    }
    //innerGreet();
}
console.log(greet);
changeGreet();

//function expression 
//nameless
let add = function(num1,num2){
    return num1+num2;
}
add(4,20)

//higher order function
//function that takes another function as an argument

let greet2= function(){
    console.log("HELLOOOOOO");
}

function multipleGreet(func,n){  //higher order function

    for(let i=0;i<n;i++){
        func();
        }

}
multipleGreet(greet2,5);
multipleGreet(function(){console.log("namaste")},24);

//Higher order function --> return a function
//function that returns another function
// let odd= function(n){
//     console.log(!(n%2==0));
// }
// let even= function(n){
//     console.log((n%2==0));
// }

function oddOrEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        
    }else if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
        
    }else{
        console.log("invalid request");
    }

}

//method
const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}