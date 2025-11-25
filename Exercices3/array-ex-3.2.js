// Exercise 3.2

// Write a program that will calculate the average value of a given array.

// Test it with the following arrays:

//  [1, 2, 3, 4, 5] => 3
// [100, 101, 102] => 101

// La méthode
// reduce() en JavaScript est une fonction de tableau qui itère sur chaque élément pour le réduire à une seule valeur finale. Elle est particulièrement utile pour cumuler des résultats comme une somme, un objet ou un nouveau tableau, en passant un résultat d'une étape à la suivante. La fonction est définie par deux paramètres principaux : un accumulateur qui conserve le résultat, et la valeur courante de l'élém

// let total = [1, 2, 3, 4].reduce(function(accumulateur, valeurCourante) {
//   return accumulateur + valeurCourante;
// }, 0);
// total sera 10


// Exercices: 



const array1 = [1, 2, 3, 4, 5]

function somme(precedent, suivant){
    return precedent + suivant
}
const total = array1.reduce (somme)
console.log (total/array1.length)



// [100, 101, 102] => 101

const table = [100, 101, 102]

function tablesum (valeur1, valeur2){
    return valeur1 + valeur2
}

const totaltable = table.reduce(tablesum)

console.log(totaltable/table.length)




