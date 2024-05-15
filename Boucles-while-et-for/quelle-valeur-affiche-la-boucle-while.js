"use strict";

/*
A votre avis, quelles sont les valeurs affichées pour chaque boucle ? Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l’alert ou pas ?

    Le préfixe sous forme ++i :

let i = 0;
while (++i < 5) alert( i );

Le postfixe sous forme i++ :

let i = 0;
while (i++ < 5) alert( i );
*/

let i = 0;
while (++i < 5) alert(i);



while (i++ < 5) alert(i);

// logiquement le prefix, renvoie à la valeur après l'incrémentation, donc c'est de 1 à 4.
// le postfix renvoie à la valeur avant l'incrémentation, donc on commence à partir de 0 à 4.
// Mais nous avons vu en cours que les deux boucles affichent les même valeur et commence par 0 toutes les deux

