'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    // No value 
    if (!guess) {
        displayMessage("⛔ No number!");

    // Player win    
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector("h1").textContent = "You Win!";
        document.querySelector("h1").style.fontSize = "12rem";
        document.querySelector(".number").style.width = "30rem";
        

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    // When guess is wrong (low or higher)  
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score --;
            document.querySelector(".score").textContent = score;
            } else {
                displayMessage("💥 You lost the game!");
                document.querySelector(".number").textContent = secretNumber;
                document.querySelector(".number").style.width = "30rem";
                document.querySelector("body").style.backgroundColor = "#FF0000";
                document.querySelector("h1").textContent = "You Lost!";
                document.querySelector("h1").style.fontSize = "12rem";
                document.querySelector(".score").textContent = 0;
            }
        }    
});

document.querySelector(".again").addEventListener("click", function() {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = 10;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("h1").textContent = "Guess My Number!";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("h1").style.fontSize = "5rem";
}); 


    // // Number is too high 
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //     document.querySelector(".message").textContent = "📈 Too high!";
    //     score --;
    //     document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "💥 You lost the game!";
    //         document.querySelector(".number").textContent = secretNumber;
    //         document.querySelector(".number").style.width = "30rem";
    //         document.querySelector("body").style.backgroundColor = "#FF0000";
    //         document.querySelector("h1").textContent = "You Lost!";
    //         document.querySelector("h1").style.fontSize = "12rem";
    //         document.querySelector(".score").textContent = 0;
    //     }

    // // Number is too low    
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📉 Too low!";
    //         score --;
    //         document.querySelector(".score").textContent = score;
    //         } else {
    //             document.querySelector(".message").textContent = "💥 You lost the game!";
    //             document.querySelector(".number").textContent = secretNumber;
    //             document.querySelector(".number").style.width = "30rem";
    //             document.querySelector(".score").textContent = 0;
    //             document.querySelector("body").style.backgroundColor = "#FF0000";
    //             document.querySelector("h1").textContent = "You Lost!";
    //             document.querySelector("h1").style.fontSize = "12rem";
    //         }
    // }





