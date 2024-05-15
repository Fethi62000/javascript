"use strict"

/*
Voici un code qui demande à l’utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l’exemple ci-dessous est 12 (pour les valeurs d’invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
*/

let a = +prompt("First number?", 1); // il manque un + devant le prompt
let b = +prompt("Second number?", 2); // il manque un + devant le prompt

console.log(a + b);
