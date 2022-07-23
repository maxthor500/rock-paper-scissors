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

    return player
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

const game = () => {
    let winnerRounds = {
        player: 0,
        computer: 0
    }

    const maxRounds = 5

    for (let i = 0; i < maxRounds; i++) {
        const playerSelection = playerChoice()
        const computerSelection = computerPlay()
        const round = playRound(playerSelection, computerSelection)

        if (round === "Player") {
            winnerRounds.player += 1
        } else if (round === "Computer"){
            winnerRounds.computer += 1
        } else {
            i--
        }
    }

    if (winnerRounds.player > winnerRounds.computer) {
        console.log(`You got ${winnerRounds.player} points and won the game!`)
    } else {
        console.log(`${winnerRounds.player} points are not enough. You lose the game!`)
    }
}

const startGame = document.getElementById("start-game");

startGame.addEventListener("click", game());