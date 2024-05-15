"use script";

/*
Lesquelles de ces alertes vont s’exécuter ?

Quels seront les résultats des expressions à l’intérieur de if (...) ?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
*/

if (-1 || 0) alert('first'); // OR recherche la première valeur vraie, donc l'alert va s'afficher et le résultat de if sera -1
if (-1 && 0) alert('second'); // AND recherche la première valeur fausse, donc l'alert ne s'affichera pas et le résultat de if sera 0
if (null || -1 && 1) alert('third'); // l'alert va s'afficher, le résultat à l'intérieur de if sera -1
