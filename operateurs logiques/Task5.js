"use strict";

/*
Quel sera le résultat ?

alert( null || 2 && 3 || 4 );
*/

alert(null || 2 && 3 || 4); // 3 car on commence par l'opérateur && car ca présédence est supérieure et ensuite on fait || et on s'arrêt à la première valeure vraie.
