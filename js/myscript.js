// // Chiedi all’utente la sua email,
// // controlla che sia nella lista di chi può accedere,
// // stampa un messaggio appropriato sull’esito del controllo.
//
// var mail = prompt ("Inserisci la tua mail");
//
// var mailList = ["abc@boolean.it" , "def@boolean.it" , "ghi@boolean.it" , "lmn@boolean.it" , "opq@boolean.it" , "rst@boolean.it" , "uvz@boolean.it" , "studenteClasse16@boolean.it"];
// console.log([mailList]);
//
// var trovata = false;
//
// for (var i = 0; i < mailList.length; i++){
//
//     if (mail == mailList[i]) {
//     trovata = true;
//     }
//
// }
//
// if (trovata == true) {
//     alert("Controllo effettuato con successo! Puoi accedere al sito");
// } else {(
//     alert("Mail non trovata. Impossibile accedere al sito");
// }


// ***Gioco dei dadi***
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


var giocatoreRandom = Math.floor(Math.random()*6) + 1;
console.log(giocatoreRandom);

var pcRandom = Math.floor(Math.random()*6) + 1;
console.log(pcRandom);

var vincitore;
var pareggio;

if (giocatoreRandom > pcRandom) {
    vincitore = giocatoreRandom;
    document.getElementById('numero-vincitore').innerHTML = "Giocatore ha vinto. Il numero con il punteggio più alto è " + vincitore;

}
else if (pcRandom > giocatoreRandom) {
    vincitore = pcRandom;
    document.getElementById('numero-vincitore').innerHTML = "PC ha vinto. Il numero con il punteggio più alto è " + vincitore;

}
else {
    pareggio = giocatoreRandom == pcRandom;
    document.getElementById('numero-uguale').innerHTML = "Pareggio";
}
