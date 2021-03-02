/* L’utente inserisce due numeri in successione, con due prompt.
 Il software stampa il maggiore*/

var primoNumeroUtente = parseInt(prompt("inserisci un numero"));



var secondoNumeroUtente = parseInt(prompt("inserisci un secondo numero"));

if ( primoNumeroUtente > secondoNumeroUtente ) {

  document.getElementById('numeroUt').innerHTML = primoNumeroUtente;

} else if ( primoNumeroUtente < secondoNumeroUtente ){

  document.getElementById('numeroUt').innerHTML = secondoNumeroUtente;

} else {

  document.getElementById('numeroUt').innerHTML = " errore hai scelto lo stesso numero";

}
