
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");

let rockwins = 'assets/images/rock.mp3';
let scissorswins = 'assets/images/scissors.mp3';
let paperwins = 'assets/images/paper.mp3';
let tie ="assets/images/bell.mp3";

let result = document.getElementById("player-choice");
let computer = document.getElementById("computer");
let computer_choice;


rock.addEventListener('click', () => {
    result.innerHTML = "<img src='assets/images/rockangrybis.jpg' />";
    let resultado = 0;
    // console.log(resultado);

    // let computer_choice = Math.floor(Math.random() * 3);
    // console.log(computer_choice);
    computerChoice();
    console.log(computerChoice);
    if (resultado == computer_choice) {


        document.getElementById("valor").innerHTML = "Tie";
        audioWinner(tie);

    }
    else if (computer_choice == 1) {

        document.getElementById("valor").innerHTML = "Rock wins scissors, you win!";
        let audio = new Audio('assets/images/rock.mp3');
        audio.play();

    }
    else {

        document.getElementById("valor").innerHTML = "Paper wins rock , you loose!";
        let audio = new Audio('assets/images/paper.mp3');
        audio.play();
    }

})

scissors.addEventListener('click', () => {
    result.innerHTML = "<img src='assets/images/scissorsangrybis.png' />";

    let resultado = 1;
    console.log(resultado);
    computerChoice();
    // let computer_choice = Math.floor(Math.random() * 3);
    // console.log(computer_choice);

    if (resultado == computer_choice) {


        document.getElementById("valor").innerHTML = "Tie";
        audioWinner(tie);

    }
    else if (computer_choice == 0) {

        document.getElementById("valor").innerHTML = "Rock wins scissors, you loose!";
        // let audio = new Audio('assets/images/rock.mp3');
        // audio.play();
        audioWinner(rockwins);

    }
    else {

        document.getElementById("valor").innerHTML = "Scissors wins paper, you win!";
        let audio = new Audio('assets/images/scissors.mp3');
        audio.play();
    }
})

paper.addEventListener('click', () => {
    result.innerHTML = "<img src='assets/images/paperangrybis.png' />";
    let resultado = document.getElementById("valor");
    resultado = 2;
    console.log(resultado);

    let computer_choice = Math.floor(Math.random() * 3);
    console.log(computer_choice);

    if (resultado == computer_choice) {
        computer.innerHTML = "<img src='assets/images/paperangrybis.png' />";

        document.getElementById("valor").innerHTML = "Tie";
        audioWinner(tie);

    }
    else if (computer_choice == 0) {
        computer.innerHTML = "<img src='assets/images/rockangrybis.jpg' />";
        document.getElementById("valor").innerHTML = "Paper wins rock, you win!";
        audioWinner(paperwins);

    }
    else {
        computer.innerHTML = "<img src='assets/images/scissorsangrybis.png' />";
        document.getElementById("valor").innerHTML = "Scissors wins paper , you loose!";
        let audio = new Audio('assets/images/scissors.mp3');
        audio.play();
    }
})

// function playerChoice(){

// }


function computerChoice() {
    computer_choice = Math.floor(Math.random() * 3);
    console.log(computer_choice);

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
