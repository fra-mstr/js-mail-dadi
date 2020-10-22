// Mail

var mailUtente = prompt("Inserisci la tua mail");

var accessAllowed = ["francescomaestroni@gmail.com", "giuseppebianchi@gmail.com", "marcorossi@gmail.com", "pincopallino@gmail.com", "tiziocaio@gmail.com"];

for (var i = 0; i < accessAllowed.length; i++) {
  if (mailUtente == accessAllowed[i]) {
    console.log("Accesso consentito")
  } else {
    console.log("Accesso negato")
  }
};

// Gioco dei dadi

// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var 
