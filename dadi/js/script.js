
var playerNum = Math.floor(Math.random() * (7 - 1)) + 1;

var compNum = Math.floor(Math.random() * (7 - 1)) + 1;

console.log("Risultato Player 1: ", playerNum);
console.log("Risultato Avversario: ", compNum);


// // condizioni lancio
if (playerNum > compNum) {
  console.log("Hai vinto!")
} else if (playerNum < compNum) {
  console.log("Hai perso. Riprova!")
} else {
  console.log ("Pareggio. Riprova!")
}
