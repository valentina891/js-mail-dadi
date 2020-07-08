// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mail = prompt ("Inserisci la tua mail");

var mailList = ["abc@boolean.it" , "def@boolean.it" , "ghi@boolean.it" , "lmn@boolean.it" , "opq@boolean.it" , "rst@boolean.it" , "uvz@boolean.it" , "studenteClasse16@boolean.it"];
console.log([mailList]);

var trovata = false;

for (var i = 0; i < mailList.length; i++){

    if (mail == mailList[i]) {
    trovata = true;
    }

}

if (trovata == true) {
    alert("Controllo effettuato con successo! Puoi accedere al sito");
} else {
    alert("Mail non trovata. Impossibile accedere al sito");
}
