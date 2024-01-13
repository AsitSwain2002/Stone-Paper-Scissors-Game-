let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let result = document.querySelector(".result");
let addUserPoint = document.querySelector(".count1In1");
let addCompPoint = document.querySelector(".count2In1");
let userPoint = 0;
let compPoint = 0;
let rounds = 0;

rock.addEventListener('click', () => {
    playRound("rock");
});

paper.addEventListener('click', () => {
    playRound("paper");
});

scissors.addEventListener('click', () => {
    playRound("scissors");
});

function playRound(userChoice) {
    let arr = ["rock", "paper", "scissors"];
    let comp = arr[Math.floor(Math.random() * arr.length)];

    if (userChoice === comp) {
        result.innerText = "Draw";
        result.style.background = "yellowgreen";
        result.style.color = "black";
    } else if (
        (userChoice === "rock" && comp === "scissors") ||
        (userChoice === "paper" && comp === "rock") ||
        (userChoice === "scissors" && comp === "paper")
    ) {
        result.innerText = "You win!";
        result.style.background = "green";
        result.style.color = "black";
        userPoint++;
        addUserPoint.textContent = userPoint;
    } else {
        result.innerText = "You lose!";
        result.style.background = "red";
        result.style.color = "black";
        compPoint++;
        addCompPoint.textContent = compPoint;
    }

    rounds++;

    if (rounds === 10) {
        // Display final results or end the game
        if(userPoint < compPoint){
            alert(`ohh😔😔😔 Computer is win compPoint : ${compPoint}   YourPoint : ${userPoint}`);
            location.reload();
        }
        else if(userPoint > compPoint){
            alert(`OHOO!🎊🎊🎊 You win yourPoint - ${userPoint}    compPoint - ${compPoint}`)
            location.reload();
        } 
    }
}
