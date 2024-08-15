const choices=["rock","paper","scissor"]
const playerDisplay=document.getElementById("playerDisplay");
const compDisplay=document.getElementById("compDisplay");
const resultToDisplay=document.getElementById("result");
const scorePlayer=document.getElementById("playerSc");
const scoreComputer=document.getElementById("compSc");
let playerScore=0;
let compScore=0;
function playgame(playerChoice){
    const compChoice=choices[Math.floor(Math.random()*3)];
    let res="";
    if(compChoice===playerChoice){
        res="IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                res=(compChoice==="scissor")? "YOU WIN!":"YOU LOST";
                break;
            case "scissor":
                res=(compChoice==="paper")? "YOU WIN!":"YOU LOST";
                break;
            case "paper":
                res=(compChoice==="rock")? "YOU WIN!":"YOU LOST";
                break;

        }
    }
    playerDisplay.textContent=`Player: ${playerChoice}`;
    compDisplay.textContent=`Computer: ${compChoice}`;
    resultToDisplay.textContent=res;
    if(res==="YOU WIN!"){
        resultToDisplay.style.color="hsl(118, 68%, 53%)";
        playerScore++;
    }
    else if(res==="YOU LOST"){
        resultToDisplay.style.color="hsl(12, 88%, 47%)";
        compScore++;
    }
    else{
        resultToDisplay.style.color="hsl(0, 2%, 19%)";
    }
    scorePlayer.textContent=`Player Score: ${playerScore}`;
    scoreComputer.textContent=`Computer Score: ${compScore}`;



}