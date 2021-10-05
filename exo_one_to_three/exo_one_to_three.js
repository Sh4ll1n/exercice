// Ecrire un script qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce
// que la réponse convienne.

var nbre = prompt("Veuillez saisir un nombre entre et trois");
console.log(nbre);
for(var i = 0; i <= 10; i++){
    if (nbre == 1 || nbre == 2 || nbre == 3){
        console.log("Bonne reponse");
        break;
    }
    else 
        console.log("Try again");
}

// J'arrive bien que 1 2 et 3 sont les bonnes réponses a la question. Mais je n'arrive pas a ce que cela se relance automatiquement. Pareil je ne sais pas quoi mettre comme condition. S