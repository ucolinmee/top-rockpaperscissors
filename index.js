function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(c1, c2) {
    c1 = c1.toLowerCase();
    c2 = c2.toLowerCase();
    if (c1 === c2) {
        return 0;
    } else if (c1 === "rock") {
        if (c2 === "paper") {
            return -1;
        } else {
            return 1;
        }
    } else if (c1 === "paper") {
        if (c2 === "scissors") {
            return -1;
        } else {
            return 1;
        }
    } else if (c1 === "scissors") {
        if (c2 === "rock") {
            return -1;
        } else {
            return 1;
        }
    }
}

var selections = document.querySelectorAll("img");
selections.forEach((selection) => {
    selection.addEventListener("click", (e) => {
        console.log(e.target.id);
    })
})

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