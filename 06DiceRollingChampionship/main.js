//lavet sammed med Yunus Emre Altintas//
console.log(`Welcome to the Dice Rolling Championship!`)

const player1 = prompt("Enter name of Player 1")
const player2 = prompt("Enter name of Player 2") //kildehenvisning:  https://www.w3schools.com/jsref/met_win_prompt.asp//

console.log(`PLayer 1: ${player1}`)
console.log(`Player 2: ${player2}`)

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; //kildehenvisning: https://www.w3schools.com/js/js_random.asp?utm_source.com//
}

let player1Score = 0;
let player2Score = 0;

for (let round = 1; round <= 10; round++) {
    console.log(`Round ${round}:`);

    prompt(`${player1} Press Enter to roll...`)
    const rollPlayer1 = rollDice();
    console.log(`${player1} rolled: ${rollPlayer1}`);
    player1Score += rollPlayer1

    prompt(`${player2} Press Enter to roll...`)
    const rollPlayer2 = rollDice()
    console.log(`${player2} rolled: ${rollPlayer2}`);
    player2Score += rollPlayer2

    console.log(`${player1} rolled: ${rollPlayer1} (Total: ${player1Score})`);
    console.log(`${player2} rolled: ${rollPlayer2} (Total: ${player2Score})`);
}

console.log("Final Scores:");
console.log(`${player1}: ${player1Score}`);
console.log(`${player2}: ${player2Score}`);

if (player1Score > player2Score) {
    console.log(`${player1} wins the Dice Rolling Championship!`);
} else if (player2Score > player1Score) {
    console.log(`${player2} wins the Dice Rolling Championship!`);
} else {
    console.log("It's a tie");
}
