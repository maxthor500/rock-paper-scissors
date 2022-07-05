const gameMoves = ["Rock", "Paper", "Scissors"]

const playerPrompt = () => {
    let player = prompt("Please, enter Rock, Paper or Scissors:");

    if (player) {
        player = player.toLowerCase()
    };
    
    switch (player) {
        case "rock":
            player = "Rock";
            break;
        case "paper":
            player = "Paper";
            break;
        case "scissors":
            player = "Scissors";
            break;
        default:
            player = playerPrompt();
            break;
    }

    return player;
}


const computerPlay = () => {
    const random = Math.floor(Math.random() * gameMoves.length);
    return gameMoves[random];
}

const playRound = (playerSelection, computerSelection) => {
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    const wonMessage = `You won! ${playerSelection} beats ${computerSelection}`;

    if (playerSelection === computerSelection) {
        console.log(`Draw! You selected ${playerSelection} as the computer did.`);
    } else if (
        ((playerSelection === "Rock") && (computerSelection === "Paper")) ||
        ((playerSelection === "Paper") && (computerSelection === "Scissors")) ||
        ((playerSelection === "Scissors") && (computerSelection === "Rock"))
        ) {
        console.log(loseMessage);
    } else {
        console.log(wonMessage);
    }
}

const playerSelection = playerPrompt();
const computerSelection = computerPlay();
