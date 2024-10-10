let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();   
    h3.innerText = randomColor;

    // access div 
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
    console.log("Color Updated !! ");
})

// value of colors between 0 to 255
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;            
    return color;

}