var accessAllowed = [ "francescomaestroni@gmail.com", "giuseppebianchi@gmail.com",
"marcorossi@gmail.com",
"pincopallino@gmail.com",
"tiziocaio@gmail.com"
];

var mailUtente = prompt("Inserisci la tua mail");

var validMail = false;

for (var i = 0; i < accessAllowed.length; i++) {
  if (mailUtente == accessAllowed[i]) {
    validMail = true;
  }
};

var mailResult = document.getElementById("output");

if (validMail == true) {
  mailResult.innerHTML = "Accesso consentito"
} else {
  mailResult.innerHTML = "Accesso negato"
};
