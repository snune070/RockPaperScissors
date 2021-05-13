game();

function computerPlay(){
    let computerChoice = Math.random() * (15 - 1) + 1;
    if(computerChoice <= 5){
        return "Rock"
    }
    else if (computerChoice >= 6 && computerChoice <= 10) {
        return "Paper"
    }
    else if(computerChoice >= 11){
        return "Scissors"
    }
    else {
        return "Paper"
    }
}

function playRound(playerSelection, computerSelection){

    switch (playerSelection.toLowerCase() === "rock"){
        case computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "rock":
            console.log("tie")
            break;
        case computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock":
            console.log("You win! Rock beats scissors")
            break;
        case computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock":
            console.log("You lose! Paper beats rock")
            break;
        default:
            console.log("Not a correct input so nobody wins")
    }

    switch (playerSelection.toLowerCase() === "paper"){
        case computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper":
            console.log("You win! Paper beats rock")
            break;
        case computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "paper":
            console.log("Both picked paper so its a tie")
            break;
        case computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper":
            console.log("You lose! Scissors beats paper")
            break;
        default:
            console.log("That's not a choice, nobody wins")
    }

    switch (playerSelection.toLowerCase() === "scissors") {
        case computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors":
            console.log("You lose! Rock beats scissors")
            break;
        case computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors":
            console.log("You win! Scissors losses to paper")
            break;
        case computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "scissors":
            console.log("Its a tie! You both picked scissors")
            break;
        default:
            console.log('That is not a valid input, try again')
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock paper or scissors")
        const computerChoice = computerPlay().toLowerCase()
        playRound(playerChoice, computerChoice)
    }
}

