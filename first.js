let userScore=0;
let compScore=0;
let drawScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetGame = document.querySelector(".reset-button1");
const draMsg = document.querySelector("#draw-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "sissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock paper sissors 
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you lost");
        msg.style.backgroundColor = "blue";
        msg.innerText = "You Lost";
    }
};

const drawGame = () =>{
    msg.style.backgroundColor = "yellow";
    console.log("game is draw.");
    msg.innerText = "Game draw";
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice = genComputerChoice();
    //generate compchoice
    console.log("comp choice is", compChoice);

    if (userChoice == compChoice){
        //draw game
        drawScore++;
        draMsg.innerText= drawScore;        
        drawGame();
    } else {
        let userWin= true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "sissors"? false:true;
        } else {
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


resetGame.addEventListener("click", ()=>{
    msg.innerText="Play Your Move";
    userScore=0;
    compScore=0;
    drawScore=0;
    draMsg.innerText=drawScore;
    userScorePara.innerText= userScore;
    compScorePara.innerText= compScore;
    msg.style.backgroundColor="black";
})

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    } )
})
