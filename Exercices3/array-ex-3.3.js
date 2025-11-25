// Exercise 3.3

// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)

// En JavaScript, la méthode slice() est utilisée pour extraire une partie d’un tableau (ou d’une chaîne de caractères) et retourner un nouveau tableau (ou une nouvelle chaîne) contenant les éléments sélectionnés, sans modifier l’original.

let couleur = ["noir", "jaune" , "rouge"];
console.log(couleur);

let color2 = couleur.slice()
console.log(color2)

let color3 = couleur.slice(0, 1) 
console.log(color3)




const fruits = ['pomme', 'banane', 'orange', 'kiwi', 'mangue'];
const extrait = fruits.slice(1, 4);
console.log(extrait); // ['banane', 'orange', 'kiwi']
console.log(fruits);  // ['pomme', 'banane', 'orange', 'kiwi', 'mangue'] (inchangé)


// !!!!!!!!!!!! Utilisation d'indice NEGATIF !!!!!!!!!!!!!
// Les indices negatifs commentcent par la fin du tableau. 
// Pour RAPPEL: le premier indice est égale à zero Dans l'exemple ci-dessous (10); le dernier est (50). L'indice indiquer dans la formule n'est jamais repris dans le resultat. voir ci-dessous -3, -1

const nombres = [10, 20, 30, 40, 50];
const extraitNegatif = nombres.slice(-3, -1);
console.log(extraitNegatif); // [30, 40]
