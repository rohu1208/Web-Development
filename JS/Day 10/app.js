// // let btn=document.querySelector("button");
// // console.dir(btn);

// // btn.onclick=function(){
// //     console.log("button was clicked");
// //     alert("buttonnnnnnnnnnnn");
// // }

// // function sayHello(){
// //     alert("hello");
// // }
// // btn.onclick = sayHello();
// // btn.onclick = sayHello;

// let btns=document.querySelectorAll("button");
// for (btn of btns){
//     // btn.onclick= sayHello ;
//     // btn.onclick= sayName ;
//     // btn.onmouseenter = function(){
//     //     console.log("ROHAN YOU Entered a button");
//     // }

//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("button was double clicked");
//         });
// }



// function sayHello(){
//     alert("hello");
// }
// function sayName(){
//     alert("Rohan");
// }
//onmouseenter


//this in event listener
let btn2=document.querySelector("button");
btn2.addEventListener("click",function(){
    console.log(this);
    // on click it return button name

})

// on click any it must change color so we can do-
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellow";
}
let p=document.querySelector("p");
p.addEventListener("click",changeColor);

let h1=document.querySelector("h1");
h1.addEventListener("click",changeColor);
// this keyword in event listener


