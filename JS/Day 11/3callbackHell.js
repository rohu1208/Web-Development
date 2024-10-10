h1=document.querySelector("h1");
// h1.style.color="red";
// setTimeout(()=>{
//     h1.style.color="red";
// },1000)

// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color="green";
// },3000);
// instead of this frequent 1 sec

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if (nextColorChange) nextColorChange();
    },delay);
}
// now we can call this function in setTimeout
changeColor("red",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("green",1000);
    });
}
);
// changeColor("red",1000);
// changeColor("blue",2000);
// changeColor("green",3000);

// for betterment
//nextColorChange

//to deal with call back hell
//we can use promise
//promise is a object that has two methods
// also async and awake
