/*in un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/
var invitati = ["alfredo", "samu", "tommaso", "davide"];

var nomeUtente = prompt("inserisci il tuo nome");

var inLista = false;

for ( var i = 0; i < invitati.length; i++ ) {

  if ( nomeUtente === invitati[i] ){

    inLista = true;

  }

}

if( inLista == true ){

  console.log("invitato");

}else{
  console.log("non invitato");
}
