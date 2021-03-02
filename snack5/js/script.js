/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/


var numero = [];

var numeroUtente;

var dispari;

for (var i = 0; i < 6; i++ ){

 numeroUtente = parseInt( prompt("inserisci un numero"));

 if ( numeroUtente %2 == 1 ) {

  dispari = numeroUtente;
  numero.push(dispari);

 }

}
console.log(numero);
