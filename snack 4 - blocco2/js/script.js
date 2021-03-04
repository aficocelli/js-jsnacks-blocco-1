/*Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari*/

// 1 creo array numeri interi

var numeriInteri = [1, 2, 4, 6, 8, 3, 9, 10, 14];

var somma = 0;
// 2 somma numeri in posizione dispari

for ( var i = 0; i < numeriInteri.length; i++){

  if (i %2 == 1) {

    somma += numeriInteri[i];

  }
}

console.log(somma);

// console.log(numeriInteri);
