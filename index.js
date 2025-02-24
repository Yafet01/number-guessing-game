const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function welcome() {
    console.log("Welcome to the Number Guessing Game! I'm thinking of a number between 1 and 100.");
}

function easy() {
    console.log("Great! You have selected the Easy difficulty level. You have 10 chances! \nLet's start the game");
    let randoNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 10;

    function letGuess() {
        rl.question('Guess a number: ', (guess) => {
            guess = parseInt(guess);
            if (isNaN(guess) || guess < 1 || guess > 100) {
                console.log('Invalid input. Please enter a number between 1 and 100.');
                return letGuess();
            }
            attempts++;

            if (guess > randoNum) {
                console.log(`Incorrect, Your Guess ${guess} is greater. Guess again!`);
            } else if (guess < randoNum) {
                console.log(`Incorrect, Your Guess ${guess} is less than the number. Guess Again!`);
            } else {
                console.log(`Congratulations! You guessed the correct number ${randoNum} in ${attempts} attempts.`);
                return askToPlayAgain();
            }

            if (attempts < maxAttempts) {
                letGuess();
            } else {
                console.log(`Game Over! The correct number was ${randoNum}`);
                askToPlayAgain();
            }
        });
    }
    letGuess();
}

function medium() {
    console.log("Great! You have selected the Medium difficulty level. You have 5 chances! \nLet's start the game");
    let randoNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 5;

    function letGuess() {
        rl.question('Guess a number: ', (guess) => {
            guess = parseInt(guess);
            if (isNaN(guess) || guess < 1 || guess > 100) {
                console.log('Invalid input. Please enter a number between 1 and 100.');
                return letGuess();
            }
            attempts++;

            if (guess > randoNum) {
                console.log(`Incorrect, Your Guess ${guess} is greater. Guess again!`);
            } else if (guess < randoNum) {
                console.log(`Incorrect, Your Guess ${guess} is less than the number. Guess Again!`);
            } else {
                console.log(`Congratulations! You guessed the correct number ${randoNum} in ${attempts} attempts.`);
                return askToPlayAgain();
            }

            if (attempts < maxAttempts) {
                letGuess();
            } else {
                console.log(`Game Over! The correct number was ${randoNum}`);
                askToPlayAgain();
            }
        });
    }
    letGuess();
}

function hard() {
    console.log("Great! You have selected the Hard difficulty level. You have 3 chances! \nLet's start the game");
    let randoNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 3;

    function letGuess() {
        rl.question('Guess a number: ', (guess) => {
            guess = parseInt(guess);
            if (isNaN(guess) || guess < 1 || guess > 100) {
                console.log('Invalid input. Please enter a number between 1 and 100.');
                return letGuess();
            }
            attempts++;

            if (guess > randoNum) {
                console.log(`Incorrect, Your Guess ${guess} is greater. Guess again!`);
            } else if (guess < randoNum) {
                console.log(`Incorrect, Your Guess ${guess} is less than the number. Guess Again!`);
            } else {
                console.log(`Congratulations! You guessed the correct number ${randoNum} in ${attempts} attempts.`);
                return askToPlayAgain();
            }

            if (attempts < maxAttempts) {
                letGuess();
            } else {
                console.log(`Game Over! The correct number was ${randoNum}`);
                askToPlayAgain();
            }
        });
    }
    letGuess();
}

function askToPlayAgain() {
    rl.question("\nDo you want to play again? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            difficulty();
        } else {
            console.log("Thanks for playing! See you next time.");
            rl.close();
        }
    });
}

function difficulty() {
    console.log('Select the difficulty level.\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)');

    rl.question("Enter your choice (1-3): ", (input) => {
        input = parseInt(input);

        if (input === 1) {
            easy();
        } else if (input === 2) {
            medium();
        } else if (input === 3) {
            hard();
        } else {
            console.log("Please enter a valid number between 1 to 3.");
            difficulty();
        }
    });
}

welcome();
difficulty();
