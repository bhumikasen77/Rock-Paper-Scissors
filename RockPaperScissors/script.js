let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msgP = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const showWinner =(userWin)=>{
    if (userWin) {
       console.log("you win"); 
       msgP.innerText = "you win!";
       msgP.style.background = "green";
       userScore++;
       userScorePara.innerText = userScore;
    }else{
        console.log("you loose");
        msgP.innerText = "you loose!";
        msgP.style.background = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
       
}

const drawGame=()=>{
    console.log("Game was Draw");
    msgP.innerText = "Game was Draw";
    msgP.style.background = "#081b31";
}

const playGame = (userChoice)=>{
    let compChoice = genCompChoice();
    console.log("user choice",userChoice);
    console.log("comp choice",compChoice);
    if (compChoice === userChoice) {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors"?false:true;
        }else {
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});