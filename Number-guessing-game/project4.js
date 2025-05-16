let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempt = 0;

function checkGus() {
    const getNum = parseInt(document.querySelector(".guessInput").value);
    const result = document.getElementsByClassName("result")[0];
    const attemptText = document.getElementsByClassName("attempt")[0];

    if (attempt < 5) {
        attempt++;

        if (getNum === randomNumber) {
            result.textContent = "Your guess is correct!";
            alert("Congratulations! You guessed it in attempt:"+ attempt+" refresh page to play again");
        } else {
            result.textContent = "Try again!";
            attemptText.textContent = "Remaining attempts: " + (5- attempt);
        }
    } else {
        result.textContent = "No more attempts! The number was " + randomNumber;
        attemptText.textContent = "Game Over";
        alert("game over! refresh page to play again");
    }
}
