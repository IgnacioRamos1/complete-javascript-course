'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}


function playerInput() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage('⛔️ No number!');
    // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number! 🎉');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ?'Too high! 📈' : 'Too low! 📉';
            displayMessage(guess > secretNumber ?'Too high! 📈' : 'Too low! 📉');
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess').value = '';
        } else {
            displayMessage('You lost the game! 💥');
            document.querySelector('.score').textContent = 0;
        }
    }
}

// If the player clicks the button
document.querySelector('.check').addEventListener('click', playerInput);

// If the player presses the enter key
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter'){
        playerInput();
    }
})

document.querySelector('.again').addEventListener('click', function() {
    // Restore initial values of score and number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing... ');
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
