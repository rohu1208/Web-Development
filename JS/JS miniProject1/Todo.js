let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText = inp.value;
    let delBtn=document.createElement("button")
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    //console.log(inp.value); //print input
    //reset
    inp.value=""; //reset input
})

ul.addEventListener("click",function(){
    // console.dir(event.target.nodeName )// which button triggerd
    // console.log("button clicked");
    if(event.target.nodeName=="BUTTON" ){
        event.target.parentNode.remove();
    }
    else{
        console.log("not a button");
    }
})
// let delBtns=document.querySelectorAll(".delete")
// for (delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=delBtn.parentElement; //accessing list parent
//         par.remove();
//         });
//     }   -----> not work for new buttons


    //event delegation
    // on parent //ul