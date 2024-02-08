function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(user, comp) {
    comp = comp.toLowerCase();
    user = user.toLowerCase();
    var message = "";
    var winner;
    if (user === comp) {
        message = "Draw. You both chose " + user;
        winner = 0;
    } else if (user === "rock") {
        if (comp === "paper") {
            message = "You lost. " + comp + " beats " + user;
            winner = -1;
        } else {
            message = "You won. " + user + " beats " + comp;
            winner = 1;
        }
    } else if (user === "paper") {
        if (comp === "scissors") {
            message = "You lost. " + comp + " beats " + user;
            winner = -1;
        } else {
            message = "You won. " + user + " beats " + comp;
            winner = 1;
        }
    } else if (user === "scissors") {
        if (comp === "rock") {
            message = "You lost. " + comp + " beats " + user;
            winner = -1;
        } else {
            message = "You won. " + user + " beats " + comp;
            winner = 1;
        }
    } 
    displayResult(message);
    return winner;
}

function displayResult(msg) {
    var result = document.querySelector(".result");
    result.textContent = msg;
}

function updateScoreboard(user, comp) {
    var userScore = document.querySelector(".user-score");
    userScore.textContent = "User score: " + user;

    var compScore = document.querySelector(".computer-score");
    compScore.textContent = "Computer score: " + comp;
}

function playGame() {
    var userScore = 0;
    var computerScore = 0;
    var selections = document.querySelectorAll("img");
    selections.forEach((selection) => {
        selection.addEventListener("click", (e) => {
            var winner = playRound(e.target.id, getComputerChoice());
            if (winner > 0) {
                userScore++;
            } else if (winner < 0) {
                computerScore++;
            }
            updateScoreboard(userScore, computerScore);
            if (userScore >= 5 || computerScore >= 5) {
                var winnerMessage = "";
                if (userScore >= 5) {
                    winnerMessage = "Congratulations! You won the game.";
                } else if (computerScore >= 5) {
                    winnerMessage = "Uh oh you lost, but thanks for trying."
                }
                displayResult(winnerMessage);
            }
        })
    })
}

playGame();