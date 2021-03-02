
/*Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti.*/

var numero = 0;

for(var i = 0; i < 10; i++){

  numero = numero + parseInt(prompt("inserisci un numero"));

}

console.log(numero);
