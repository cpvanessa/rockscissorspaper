// options
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");

//results
let result = document.getElementById("player-choice");
let computer = document.getElementById("computer");
let computer_choice;

// audios
let rockwins = 'assets/audio/rock.mp3';
let scissorswins = 'assets/audiio/scissors.mp3';
let paperwins = 'assets/audio/paper.mp3';
let tie = "assets/audio/bell.mp3";
let gameover = "assets/audio/gameovertrombone.wav";
let victory = "assets/audio/victory.wav"

//counter
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');

//click options and get results
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
        endGame();
    })

    scissors.addEventListener('click', () => {
        result.innerHTML = "<img src='assets/images/scissorsangrybis.png' />";
        let resultado = 1;
        changeText();
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
            audioWinner(scissorswins);
            incrementScore(yourScoreSpan);
        }
        endGame();
        end
    })

    paper.addEventListener('click', () => {
        result.innerHTML = "<img src='assets/images/paperangrybis.png' />";
        let resultado = 2;
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
        endGame();

    })
}

//random computer options
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

//function audios
function audioWinner(x) {
    let audio = new Audio(x);
    audio.play(x);
}

//function counter
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

//function to end game
function endGame() {

    if ((yourScoreSpan.innerText > 9) && (computerScoreSpan.innerText < 10)) {
        let text = document.getElementById("end");
        text.innerHTML = "Victory!";
        text.style.color = "green";
        setInterval(function () {
            text.style.display = (text.style.display == 'none' ? '' : 'none');
        }, 800);
        audioWinner(victory);
        setTimeout(startGame, 7500);
    }

    else if ((computerScoreSpan.innerText > 9) && (yourScoreSpan.innerText < 10)) {
        let text = document.getElementById("end");
        text.innerHTML = "Looser! Game over!";
        text.style.color = "red";
        setInterval(function () {
            text.style.display = (text.style.display == 'none' ? '' : 'none');
        }, 800);
        audioWinner(gameover);

        setTimeout(startGame, 7500);
    }
}

// function to restart game
function startGame() {
    window.location.reload();
}
//change button text when game starts
function changeText() {
    document.querySelector('.start button').innerHTML = "Restart game";
}

playGame();
