function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(user, comp) {
    comp = comp.toLowerCase();
    user = user.toLowerCase();
    var message = "";
    if (user === comp) {
        message = "Draw. You both chose " + c1;
    } else if (user === "rock") {
        if (comp === "paper") {
            message = "You lost. " + computerSelection + " beats " + userSelection;
        } else {
            message = "You won. " + user + " beats " + comp;
        }
    } else if (user === "paper") {
        if (comp === "scissors") {
            message = "You lost. " + computerSelection + " beats " + userSelection;
        } else {
            message = "You won. " + user + " beats " + comp;
        }
    } else if (user === "scissors") {
        if (comp === "rock") {
            message = "You lost. " + computerSelection + " beats " + userSelection;
        } else {
            message = "You won. " + user + " beats " + comp;
        }
    } 
    displayResult(message);
}

var selections = document.querySelectorAll("img");
selections.forEach((selection) => {
    selection.addEventListener("click", (e) => {
        console.log(e.target.id);
    })
})

function displayResult(msg) {
    var result = document.querySelector(".result");
    result.textContent = msg;
}

// function playGame() {
//     var userScore = 0;
//     var computerScore = 0;
//     for (var i=1; i<6; i++) {
//         console.log("Round " + i + ", User score: " + userScore + "| Computer score: " + computerScore);
//         var userSelection = prompt("Enter your choice (rock, paper, scissors): ");
//         var computerSelection = getComputerChoice();
//         var result = playRound(userSelection, computerSelection);
//         if (result > 0) {
//             console.log("You won. " + userSelection + " beats " + computerSelection);
//             userScore++;
//         } else if (result < 0) {
//             console.log("You lost. " + computerSelection + " beats " + userSelection);
//             computerScore++;
//         } else {
//             console.log("Draw. You both chose " + computerSelection);
//         }
//     }
//     if (userScore > computerScore) {
//         console.log("Congratulations you won!");
//     } else if (computerScore > userScore) {
//         console.log("Aww it's alright try again!");
//     } else {
//         console.log("Wow you are as smart as a computer!");
//     }
//     console.log("User score: " + userScore + "| Computer score: " + computerScore + ". Thanks for playing!");
// }
// 
// playGame();