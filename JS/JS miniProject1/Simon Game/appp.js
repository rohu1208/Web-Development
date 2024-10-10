let level = 0;
let sequence = [];
let userSequence = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let gameStarted = false; // not started yet
let gameover = false; // game over flag
let score = 0; // score of the game

// Step 1 - Start the game when a key is pressed
document.addEventListener("keypress", function () {
    if (!gameStarted) {
        gameStarted = true;
        levelUp();
    }
});

// Step 2 - Flash button to show the sequence
let h3 = document.querySelector("h3"); // Changed from h3 to h2 to match level display

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

// Step 3 - Level up and generate a random sequence
function levelUp() {
    userSequence = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4); // Corrected random range
    let randColor = buttonColors[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    sequence.push(randColor);
    console.log(sequence);
    gameFlash(randBtn);
}

// Step 5 - Check user's input against the game's sequence
function checkAns(currentLevel) {
    if (userSequence[currentLevel] === sequence[currentLevel]) {
        if (userSequence.length === sequence.length) {
            setTimeout(levelUp, 1000); // Move to the next level
        }
    } else {
        h3.innerHTML = `Game Over! Your score was ${level}. <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red"; // Corrected style name
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"; // Corrected style name
        }, 150);
        resetTo();
    }
}

// Step 4 - Detect user's button press
function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id"); // Get the ID of the clicked button
    userSequence.push(userColor);
    console.log(userSequence);
    checkAns(userSequence.length - 1); // Check the latest input
}

// Add click listeners to all buttons
let allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

// Step 6 - Reset game if the user loses
function resetTo() {
    gameStarted = false;
    level = 0;
    sequence = [];
    userSequence = [];
}
