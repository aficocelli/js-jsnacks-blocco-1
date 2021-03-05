/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

// 1 creo primo array

var box2 = [1, 3, "bianchi", 6];

// 2 creo secondo array

var box1 = [2, 4, 5, "rossi", 4, 7, 8];

// 3 aggiungi elementi casuali


if (box1.length < box2.length){
do {

  box1.push(Math.floor(Math.random() * 100));


} while( box1.length < box2.length );

} else if (box1.length > box2.length){

  do {

    box2.push(Math.floor(Math.random() * 100));


  } while( box2.length < box1.length );

}

console.log(box1);

console.log(box2);
