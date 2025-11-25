// Exercise 3.4
// Write a program that will display the minimum and maximum elements of a given array.


let numbers = [0,22 ,45 ,19 ,6, 102, 75];
let max = Math.max (...numbers);
let min = Math.min (...numbers);

console.log ("Maximum = " + "" +max)
console.log ("Minimum = " + "" +min)



// // Explication
// L’opérateur ... (appelé spread operator ou opérateur de décomposition en français) est utilisé dans ton code pour décomposer le tableau numbers en une liste d’arguments individuels lorsque tu appelles Math.max() et Math.min().

// Pourquoi est-ce nécessaire ?
// 1. Math.max() et Math.min() attendent des arguments individuels, pas un tableau

// Ces fonctions sont conçues pour recevoir une liste de nombres séparés par des virgules, pas un tableau.
// Exemple :

// Math.max(1, 2, 3); // OK
// Math.max([1, 2, 3]); // Ne fonctionne pas (retourne NaN)


// Code,Résultat,Explication
// Math.max(numbers),NaN,numbers est traité comme un seul argument (un tableau).
// Math.max(...numbers),102,Les éléments du tableau sont "étalés" en arguments individuels.
