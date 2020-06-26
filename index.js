//player and computer scores
let playerScore = '0';
let computerScore = '0';


//start game
const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const displayIntro = document.querySelector(".intro");
    const displayMatch = document.querySelector(".match");

    //fade out intro animation
    playBtn.addEventListener('click', () => {
        displayIntro.classList.add("fadeOut");
        displayMatch.classList.add("fadeIn");
    })
    return;
}

//play game
const playGame = () => {
    const handSignsButton = document.querySelectorAll(".sign-btn button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hand img");
    //remove animation after 2s
    hands.forEach(hand => {
        hand.addEventListener('animationend', () => {
            hand.style.animation = "";
        })
    })
    //computer options
    const computerOptions = ['rock', 'paper', 'scissor'];
    //foreach hand signs button
    handSignsButton.forEach(button => {
        button.addEventListener('click', function () {
            //computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            //setting time for animation
            setTimeout(() => {
                //player choice
                const playerChoice = this.getAttribute("name");
                //compare both hands
                compareHandSign(playerChoice, computerChoice);
                //update score
                updateScore();
                //update the hand images
                playerHand.src = `./img/${this.getAttribute("name")}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
            }, 1000)
            //hands animation
            playerHand.style.animation = "shakePlayer 1s ease";
            computerHand.style.animation = "shakeComputer 1s ease";
        })
    })
}

//reset score
const resetScore = () => {
    const reset = document.querySelector("#reset");
    reset.addEventListener('click', () => {
        playerScore = '0';
        computerScore = '0';
        let pScore = document.querySelector("#player-score p");
        let cScore = document.querySelector("#computer-score p");
        pScore.innerHTML = playerScore;
        cScore.innerHTML = computerScore;
    })
    return;
}

//update the score
const updateScore = () => {
    let playerScores = document.querySelector("#player-score p");
    let computerScores = document.querySelector("#computer-score p");
    playerScores.innerHTML = playerScore;
    computerScores.innerHTML = computerScore;
    return;
}

//hand sign comparison between player and computer
const compareHandSign = (playerChoice, computerChoice) => {
    let winner = document.querySelector("#display-result p");
    //check for a tie
    if (playerChoice === computerChoice) {
        winner.innerHTML = "It's a tie!"
        return;
    }
    //check for rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissor") {
            winner.innerHTML = "You win!"
            playerScore++;
            updateScore();
            return;
        } else if (computerChoice === "paper") {
            winner.innerHTML = "Computer wins!"
            computerScore++;
            updateScore();
            return;
        }
    }
    //check for paper
    if (playerChoice === "paper") {
        if (computerChoice === "scissor") {
            winner.innerHTML = "Computer wins!"
            computerScore++;
            updateScore();
            return;
        } else if (computerChoice === "rock") {
            winner.innerHTML = "You win!"
            playerScore++;
            updateScore();
            return;
        }
    }
    //check for scissors
    if (playerChoice === "scissor") {
        if (computerChoice === "rock") {
            winner.innerHTML = "Computer wins!"
            computerScore++;
            updateScore();
            return;
        } else if (computerChoice === "paper") {
            winner.innerHTML = "You win!"
            playerScore++;
            updateScore();
            return;
        }
    }
    return;
}
//call functions
startGame();
playGame();
resetScore();

