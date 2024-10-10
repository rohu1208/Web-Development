// let smallImg=document.getElementsByClassName("oldImg");
// for (let i=0;i<smallImg.length;i++){
//     console.dir(smallImg[i]);
//     console.dir(smallImg[i].src)
// }

// Query Selector --> only select single element (1st element)
let smallImg=document.querySelector(".oldImg"); //class
console.dir(smallImg);

console.dir(document.querySelector("p")); 

console.dir(document.querySelector("div a"))

// for all
let allP=document.querySelectorAll("p");
console.dir(allP);