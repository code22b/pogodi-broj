
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let highscore = null;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("message").textContent = "Unesi broj između 1 i 100.";
        return;
    }

    attempts++;
    document.getElementById("attempts").textContent = attempts;

    if (guess === secretNumber) {
        document.getElementById("message").textContent = `Bravo! Pogodio si broj ${secretNumber} za ${attempts} pokušaja.`;
        if (highscore === null || attempts < highscore) {
            highscore = attempts;
            document.getElementById("highscore").textContent = highscore;
        }
        resetGame();
    } else if (guess < secretNumber) {
        document.getElementById("message").textContent = "Previše nisko!";
    } else {
        document.getElementById("message").textContent = "Previše visoko!";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("attempts").textContent = attempts;
}
