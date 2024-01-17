'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highScore = 0;

function removeHeart() {
    let heartsContainer = document.querySelector(".score");
    let hearts = heartsContainer.textContent;
  
    if (hearts.length > 0) {
        document.querySelector(".score").textContent = hearts.slice(0, -1);
    }
  }

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
            document.querySelector(".highscore").textContent = `${highScore} hearts`;
        }

    // When guess is wrong (low or higher)  
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score --;
            removeHeart();
            } else {
                displayMessage("💥 You lost the game!");
                document.querySelector(".number").textContent = secretNumber;
                document.querySelector(".number").style.width = "30rem";
                document.querySelector("body").style.backgroundColor = "#FF0000";
                document.querySelector("h1").textContent = "You Lost!";
                document.querySelector("h1").style.fontSize = "10rem";
                document.querySelector(".score").textContent = "💔";
            }
        }    
});

document.querySelector(".again").addEventListener("click", function() {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = '❤️'.repeat(5);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("h1").textContent = "Guess My Number!";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("h1").style.fontSize = "5rem";
}); 
