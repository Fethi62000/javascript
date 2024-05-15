"use strict";

/* 
En utilisant la construction if..else, écrivez le code qui demande : ‘Quel est le nom “officiel” de JavaScript?’

Si le visiteur entre “ECMAScript”, alors éditez une sortie “Bonne réponse !”, Sinon – retourne “Ne sait pas ? ECMAScript!”
*/

let officialnamejs = prompt('what is the "official" name of JavaScript?', "");

if (officialnamejs == "ECMAScript") {
    console.log("Bonne réponse!");
} else {
    console.log("Ne sait pas, ECMAScript!");
}




