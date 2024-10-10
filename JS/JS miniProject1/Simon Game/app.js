//simon game

//step 1- press key to start
//step2 - button flash
//step 3 - sequence nad update level
//step 4 - user input
//step 5 - check user input
//step 6 - game over or level up
let level = 0;
let sequence = [];
let userSequence = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let gameStarted = false; //not started yet
let buttonPressed = false; //not pressed yet
let gameover = false; //game over yet
let levelTime = 1000; //time for each level
let score = 0; //score of the game
// let audio = new Audio('sounds/start.mp3');
// let audio2 = new Audio('sounds/wrong.mp3');
// let audio3 = new Audio('sounds/correct.mp3');
// let audio4 = new Audio('sounds/levelup.mp3');
// let audio5 = new Audio('sounds/gameover.mp3');
// let audio6 = new Audio('sounds/button.mp3');
// let audio7 = new Audio('sounds/levelup.mp3');
//start game
document.addEventListener("keypress",function(){
    if (gameStarted==false){
        gameStarted = true;
        levelUp();
    }
})
//step 2
let h2= document.querySelector("h3");

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randColor= buttonColors[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor);

    sequence.push(randColor);
    console.log(sequence);
    gameFlash(randBtn);

}
//step 3
function checkAns(){
    // console.log("current level - ",level)
    let idx=level-1;
    if (userSequence[idx]===sequence[idx]){
        if(userSequence.length==sequence.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over ! your score was <br>${level} </br> <br> Press any key to start`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";
        },150);
        resetTo();
    }
}
function btnPress(){
    // console.log("btn was pressed");
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSequence.push(userColor);
    console.log(userSequence);
    checkAns(userSequence.length-1);
}
let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn){
    btn.addEventListener("click",btnPress);
}

//step4 reset
function resetTo(){
    gameStarted=false;
    level=0;
    sequence=[];
    userSequence=[];
}
    