const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const messageBox = document.querySelector(".message")
const yourscoreBox = document.querySelector(".yourscore")
const compscoreBox = document.querySelector(".compscore")
const logo = document.querySelector(".githubLogo")

var userScore = 0;
var compScore = 0;

function randomChoice() {

    let rand = Math.round(Math.random() * 2)

    let choice = ['Rock', 'Paper', 'Scissors']

    let cpu = choice[rand]

    // console.log(cpu);
    return cpu

}


rock.addEventListener('click', () => {

    let cpuChoice = randomChoice();
    // console.log(cpuChoice);


    const input = 'Rock'

    if (input == cpuChoice) {
        // console.log("draw");
        messageBox.style.background = '#e9c46a'
        messageBox.innerHTML = 'Draw'
    }

    else if (input == 'Rock' && cpuChoice == 'Paper') {
        // console.log("lost");
        messageBox.style.background = 'red'
        messageBox.innerHTML = 'Lost';
        compScore += 1
        compscoreBox.innerHTML = `Computer : ${compScore}`
    }

    else if (input == 'Rock' && cpuChoice == 'Scissors') {
        // console.log("win");
        messageBox.style.background = 'green'
        messageBox.innerHTML = 'Win'
        userScore += 1;
        yourscoreBox.innerHTML = `You : ${userScore}`
    }

})



paper.addEventListener('click', () => {

    let cpuChoice = randomChoice();

    // console.log(cpuChoice);

    const input = 'Paper'

    if (input == cpuChoice) {
        // console.log("draw");
        messageBox.style.background = '#e9c46a'
        messageBox.innerHTML = 'Draw'
    }

    else if (input == 'Paper' && cpuChoice == 'Scissors') {
        // console.log("lost");
        messageBox.style.background = 'red'
        messageBox.innerHTML = 'Lost';
        compScore += 1
        compscoreBox.innerHTML = `Computer : ${compScore}`
    }

    else if (input == 'Paper' && cpuChoice == 'Rock') {
        // console.log("win");
        messageBox.style.background = 'green'
        messageBox.innerHTML = 'Win'
        userScore += 1;
        yourscoreBox.innerHTML = `You : ${userScore}`
    }

})





scissors.addEventListener('click', () => {

    let cpuChoice = randomChoice();

    // console.log(cpuChoice);

    const input = 'Scissors'

    if (input == cpuChoice) {
        // console.log("draw");
        messageBox.style.background = '#e9c46a'
        messageBox.innerHTML = 'Draw'
    }

    else if (input == 'Scissors' && cpuChoice == 'Rock') {
        // console.log("lost");
        messageBox.style.background = 'red'
        messageBox.innerHTML = 'Lost';
        compScore += 1
        compscoreBox.innerHTML = `Computer : ${compScore}`
    }

    else if (input == 'Scissors' && cpuChoice == 'Paper') {
        // console.log("win");
        messageBox.style.background = 'green'
        messageBox.innerHTML = 'Win'
        userScore += 1;
        yourscoreBox.innerHTML = `You : ${userScore}`
    }

})


logo.addEventListener("click",()=>{
    window.open("https://github.com/engr-arnab", "_blank")
})
