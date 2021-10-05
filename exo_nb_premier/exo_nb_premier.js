// Faire un script demandant à l’utilisateur de saisir un nombre ensuite il doit vérifier si c’est un nombre premier.
// NB : Un nombre premier est donc un nombre dont ses seuls diviseurs sont 1 et lui-même. 

// Les vingt-cinq nombres premiers inférieurs à 100 sont :2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, et 97.


/* 
var x = Number
var nb_premier = (x/1 == x && x/x == 1);
*/

// En plus de cela il faut savoir SI le nombre est divisible par 2,3,4,5,6,7,8,9 mais je vais pas faire autant de if else


/* 
if (prompt(nb_premier)){
    console.log(nb_premier,"est un nombre premier");
}
else{
    console.log(nb_premier," n'est pas un nombre premier");
}; */


// Faire un tableau si le nombre choisis par l'utilisateur est dans ce tableau c'est un nombre premier sinon non. Simple et efficace. 


// CORRECTION /////////////////////////////////////////////

// var nbre = prompt("Saisir un nombre");
// console.log(nbre);
// var estPremier = true;

// for (var index = 2; index <= nbre; index++){
//     if(nbre % i === 0) {
//         console.log(nbre, " n'est pas premier");
//         estPremier = false;
//         break;
//     }
//     else{
//         console.log(nbre, " est premier");
//         break;
//     }
// }

// var nbre = prompt("Saisir un nombre");

// if (nbre == 2){
//     console.log(nbre+ "est premier");
// }

// for(var index = 2; index < nbre; index++){
//     if(nbre % index == 0){
//         console.log(nbre+ " n'est pas premier");
//         break;
//     }
//     if(index == nbre-1){
//         console.log(nbre+ " est premier");
//         break;
//     }
// }

var nbre = prompt("Saisir un nombre");
console.log(nbre);
var estPremier = true; 

for (var i = 2; i > nbre; index++){
    if (nbre%i == 0){
        console.log(nbre+ "n'est pas premier car il est divisible par", i);
        estPremier = false;
        break;
    }
}
if(estPremier){
    console.log(nbre+ "est premier")
}