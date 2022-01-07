
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");

let rockwins = 'assets/images/rock.mp3';
let scissorswins = 'assets/images/scissors.mp3';
let paperwins = 'assets/images/paper.mp3';
let tie = "assets/images/bell.mp3";

let result = document.getElementById("player-choice");
let computer = document.getElementById("computer");
let computer_choice;




const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');

function playGame() {


    rock.addEventListener('click', () => {
        result.innerHTML = "<img src='assets/images/rockangrybis.jpg' />";
        let resultado = 0;
        changeText();
        computerChoice();

        if (resultado == computer_choice) {
            document.getElementById("valor").innerHTML = "Tie";
            audioWinner(tie);

        }
        else if (computer_choice == 1) {

            document.getElementById("valor").innerHTML = "Rock wins scissors, you win!";
            audioWinner(rockwins);
            incrementScore(yourScoreSpan);

        }
        else {

            document.getElementById("valor").innerHTML = "Paper wins rock , you loose!";
            audioWinner(paperwins);
            incrementScore(computerScoreSpan);
        }

    })

    scissors.addEventListener('click', () => {
        result.innerHTML = "<img src='assets/images/scissorsangrybis.png' />";
        let resultado = 1;

        computerChoice();


        if (resultado == computer_choice) {
            document.getElementById("valor").innerHTML = "Tie";
            audioWinner(tie);

        }
        else if (computer_choice == 0) {

            document.getElementById("valor").innerHTML = "Rock wins scissors, you loose!";
            audioWinner(rockwins);
            incrementScore(computerScoreSpan);


        }
        else {

            document.getElementById("valor").innerHTML = "Scissors wins paper, you win!";
            audioWinner(scissors);
            incrementScore(yourScoreSpan);
        }
    })

    paper.addEventListener('click', () => {
        result.innerHTML = "<img src='assets/images/paperangrybis.png' />";
        let resultado = document.getElementById("valor");
        resultado = 2;
        changeText();
        computerChoice();

        if (resultado == computer_choice) {
            computer.innerHTML = "<img src='assets/images/paperangrybis.png' />";

            document.getElementById("valor").innerHTML = "Tie";
            audioWinner(tie);

        }
        else if (computer_choice == 0) {
            computer.innerHTML = "<img src='assets/images/rockangrybis.jpg' />";
            document.getElementById("valor").innerHTML = "Paper wins rock, you win!";
            audioWinner(paperwins);
            incrementScore(yourScoreSpan);

        }
        else {
            computer.innerHTML = "<img src='assets/images/scissorsangrybis.png' />";
            document.getElementById("valor").innerHTML = "Scissors wins paper , you loose!";
            audioWinner(scissorswins);
            incrementScore(computerScoreSpan);
        }
    })
}
// function playerChoice(){

// }


function computerChoice() {
    computer_choice = Math.floor(Math.random() * 3);
    if (computer_choice == 0) {
        computer.innerHTML = "<img src='assets/images/rockangrybis.jpg' />";
    }
    else if (computer_choice == 1) {
        computer.innerHTML = "<img src='assets/images/scissorsangrybis.png' />";
    }
    else {
        computer.innerHTML = "<img src='assets/images/paperangrybis.png' />";
    }
}

function audioWinner(x) {
    let audio = new Audio(x);
    audio.play(x);
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function startGame() {
    window.location.reload();
}

function changeText() {

    document.querySelector('.start button').innerHTML = "Restart game";
}



playGame();