/*
js-fizzbuzz
Istruzioni:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Consigli:
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//Scrivi un programma che stampi i numeri da 1 a 100,

//versione for

for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
//importante questa condizione deve essere messa per prima come effetto cascata
// ciò che detetiene più nozioni deve essere messo per primo
        console.log(i + ' FizzBuzz');

    }else if (i % 3 == 0) {
        console.log(i + ' Fizz');

    }else if (i % 5 == 0) {
        console.log(i + ' Buzz');

    }else {
        console.log(i);
    }
}


//versione while

var i = 1;

let multi3 = i % 3 == 0;
let multi5 = i % 5 == 0;


while (i <= 100) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' FizzBuzz');

    }else if (i % 3 == 0) {

        console.log(i + ' Fizz');

    }else if (i % 5 == 0) {

        console.log(i + ' Buzz');

    }else {
        console.log(i);
    }
    i++;
}
