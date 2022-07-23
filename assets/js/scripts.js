const gameMoves = ["Rock", "Paper", "Scissors"]


const playerChoice = (e) => {
    let player = e.target.parentNode.id

    switch (player) {
        case "rock":
            player = "Rock"
            break
        case "paper":
            player = "Paper"
            break
        case "scissors":
            player = "Scissors"
            break
    }
    
    game(player)
}


const computerPlay = () => {
    const random = Math.floor(Math.random() * gameMoves.length)
    return gameMoves[random]
}

const playRound = (playerSelection, computerSelection) => {
    const wonMessage = `You won! ${playerSelection} beats ${computerSelection}`
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`
    let winner = ""

    if (playerSelection === computerSelection) {
        console.log(`Draw! You selected ${playerSelection} as the computer did.`)
    } else if (
        ((playerSelection === "Rock") && (computerSelection === "Paper")) ||
        ((playerSelection === "Paper") && (computerSelection === "Scissors")) ||
        ((playerSelection === "Scissors") && (computerSelection === "Rock"))
        ) {
        console.log(loseMessage)
        return winner = "Computer"
    } else {
        console.log(wonMessage)
        return winner = "Player"
    }
}

let winnerRounds = {
    player: 0,
    computer: 0
}

const game = (player) => {

    const computerSelection = computerPlay()
    const round = playRound(player, computerSelection)

    if (round === "Player") {
        winnerRounds.player += 1
    } else if (round === "Computer"){
        winnerRounds.computer += 1
    }

    updateScore(winnerRounds)
}

const updateScore = (winnerRounds) => {
    const playerScore = document.getElementById("player-score")
    const computerScore = document.getElementById("computer-score")

    playerScore.textContent = winnerRounds.player
    computerScore.textContent = winnerRounds.computer
}