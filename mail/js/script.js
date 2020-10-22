Mail

var mailUtente = prompt("Inserisci la tua mail");

var accessAllowed = ["francescomaestroni@gmail.com", "giuseppebianchi@gmail.com", "marcorossi@gmail.com", "pincopallino@gmail.com", "tiziocaio@gmail.com"];

for (var i = 0; i < accessAllowed.length; i++) {
  if (mailUtente == accessAllowed[i]) {
    console.log("Accesso consentito")
  } else {
    console.log("Accesso negato")
  }
};
