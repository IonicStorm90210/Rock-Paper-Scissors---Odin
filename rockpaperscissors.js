function game() {
    let rock = 'rock';
    let scissor = 'scissors';
    let paper = 'paper';
    function getComputerChoice() {
        //console.log('Hello World!');
        let options = [rock, paper, scissor]
        let randomChoice = Math.floor(Math.random()*options.length);
        let finalChoice = options[randomChoice];

        return finalChoice;

    }

    function playGame() {
        let player = 0;
        let computer = 0;
        for (i=0; i < 10; i++) {

            let result = playRound();
            console.log(result)
            if (result === 1){
                player++;
                console.log("You won this round.")
            }
            if (result === 0){
                computer++;
                console.log("Computer Won this round.")
            }
            if (result === 2){
                console.log("This round is a tie.")
            }
            console.log("player " + player);
            console.log("computer " + computer)
        }
        if (player > computer) {
            return console.log(`You won more rounds than the computer. Congratulations!`);
        }
        if (computer > player) {
            return console.log(`You lost more rounds than the computer. You lose.`);
        }
        if (computer === player) {
            return console.log(`Both you and the computer have won the same amount of times. It's a tie.`);
        }
    }

    function playRound() {
        const playerSelection = prompt('Please choose between rock, paper, or scissors.')
        const computerSelection = getComputerChoice()
        console.log("Computer selected " + computerSelection) 
        let newPlayerSelection = playerSelection.toLowerCase();            
        if (newPlayerSelection == scissor && computerSelection == paper) {
            return 1;
        }
        else if (newPlayerSelection == rock && computerSelection == scissor) {
            return 1;
        }
        else if (newPlayerSelection == paper && computerSelection == rock) {
            return 1;
        }
        else if (newPlayerSelection == rock && computerSelection == paper) {
            return 0;
        }
        else if (newPlayerSelection == scissor && computerSelection == rock) {
            return 0;
        }
        else if (newPlayerSelection == paper && computerSelection == scissor) {
            return 0;
        }
        else if (newPlayerSelection == paper && computerSelection == paper) {
            return 2;
        }
        else if (newPlayerSelection == rock && computerSelection == rock) {
            return 2;
        }
        else if (newPlayerSelection == scissor && computerSelection == scissor) {
            return 2;
        }

    }

    playGame();

}

game();