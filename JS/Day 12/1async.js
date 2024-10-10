// async -> by default return promise
async function greet(){
    return "hello";
}
///------------------------
async function greet2(){
    throw "some random Error";
    return "hello";
}
// greet2()
// .then((result)=>{
//     console.log("greet2 resolved");
//     console.log("result Was",result)
// })
// .catch((err)=>{
//     console.log("Promise Was rejected with error : ",err);
// });
// -------------------
let demo=async ()=>{
    return 5;
}

//---------------------------------------------
// await - only can use in await
// 1. pause execution of the code
// 2. wait for the promise to resolve
// 3. return the result of the promise
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    })
}
async function demo3(){
    getNum();
    getNum();
} // it print numbers at a time to wait we use await

// demo3();
// ---------------------------
// async/await with try catch
async function demo4(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}


//-------------------------------------------
// change color of h1
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
    },delay);
        });
            

    };

// async function demo5(){
//     changeColor("red",1000);
//     changeColor("orange",1000);
//     changeColor("green",1000);
// }
/// directly change to green

// we use await
async function demo5(){
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);

    //handling error
    let a=5;
    console.log(a);
    console.log("new num - ",a+3)

}
//---------------------------------------------
////////////////
// handling error 
function changeColor1(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("num is greater than 3");
                }
            h1.style.color=color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
    },delay);
        });
            

     };
    // async function demo6(){
    //     await changeColor1("red",1000);
    //     await changeColor1("orange",1000);
    //     await changeColor1("green",1000);
    
    //     //handling error
    //     let a=5;
    //     console.log(a);
    //     console.log("new num - ",a+3)
    
    // }
// here error might occcurs
// try and catch

async function demo6(){
    try{
        await changeColor1("red",1000);
    await changeColor1("orange",1000);
    await changeColor1("green",1000);
    }
    catch(err){
        console.log("ERROR Caught ");
        console.log(err);
    }

    //handling error
    let a=5;
    console.log(a);
    console.log("new num - ",a+3)
}