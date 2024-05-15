"use strict";

/* 
En utilisant if..else, écrivez le code qui obtient un numéro via le prompt, puis l’affiche en alert :

    1, si la valeur est supérieure à zéro,
    -1, si inférieur à zéro,
    0, si est égal à zéro.

Dans cet exercice, nous supposons que l’entrée est toujours un nombre.
*/

let value = prompt("");

if (value > 1) {
    console.log(1);
} else if (value < -1) {
    console.log(-1);
} else (value == 0); {
    console.log(0);
}