// USer enter a max number and then tries to 
//guess a random generated number between 1 to max
const max=prompt("enter the max number");

const random=Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("Guess th number");
while (true){
    if(guess == "quit"){
        console.log("user quit");
        break
    }
    if(guess == random){
        console.log("user guessed it",random);
        break;
    }
    else if(guess>random){
        guess=prompt("HINT : too high,try again");
    }
    
     else{
        guess=prompt("HINT : too small,try again")
    }
};

