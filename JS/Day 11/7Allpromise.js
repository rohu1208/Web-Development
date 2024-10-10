h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
    },delay);
        });
            

    };

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);

})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);

})
.then(()=>{
    console.log("green color was completed");
    return changeColor("yellow",1000);

})


// now we can call this function in setTimeout
// changeColor("red",1000,()=>{
//     changeColor("blue",1000,()=>{
//         changeColor("green",1000);
//     });
// }
// );