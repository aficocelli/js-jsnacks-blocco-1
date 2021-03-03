

var numero = parseInt(prompt("inserisci un numero"));


do {

  numero = parseInt(prompt("devi inserire un numero"));
} while ( isNaN(numero));

for (var i = 1; i <= numero; i++){

  console.log(Math.pow(i, 3));

}





// Math.pow(base, esponente)
