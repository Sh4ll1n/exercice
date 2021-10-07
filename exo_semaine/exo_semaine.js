// Soit le tableau suivant: 
//     var semaine = ['lundi', 'mar', 'mercredi','jeudi','vendredi','samedi','dimanc'];
// Retirer la derniere valeur du tableau
// Afficher les valeurs du tableau en utilisant la méthode document.write
// Ajouter la valeur 'dimanche' à la fin du tableau
// Remplacer le mar par mardi 
// Afficher le nombre de valeurs du tableau
// Afficher la 5eme valeur

var semaine = ['lundi', 'mar', 'mercredi','jeudi','vendredi','samedi','dimanc'];
semaine.pop(); //Enleve toujours le dernier élément du tableau
console.log(semaine);
//document.write(semaine);

// semaine.splice(6,1,'dimanche');
// console.log(semaine);

semaine.push('dimanche'); //CELA AJOUTE
console.log(semaine);

semaine.indexOf('mar' = 'mardi');
console.log(semaine);
document.write(semaine);

// semaine.splice(1,1,'mardi'); //Remplace le contenu. 
// console.log(semaine);

//document.write(semaine.length);
//document.write(semaine[4]);
//document.write(semaine);

// La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.
// console.log(semaine.indexOf("Mar"));


