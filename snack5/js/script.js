/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/


var numero = [];



for (var i = 0; i < 6; i++ ){

  var numeroUtente = parseInt( prompt("inserisci un numero"));

 if ( numeroUtente %2 == 1 ) {

   numero.push(numeroUtente);

 }

}
console.log(numero);
