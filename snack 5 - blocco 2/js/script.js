/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

// 1 creo primo array

var box1 = [1, 3, "bianchi", 6];

// 2 creo secondo array

var box2 = [2, 4, 5, "rossi", 4, 7, 8];

// 3 aggiungi elementi casuali



do {

  box1.push(Math.floor(Math.random() * 100));


} while( box1.length < box2.length );

console.log(box1);

console.log(box2);
