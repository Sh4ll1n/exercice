// Ecrire une fonction javascript retournant la table de multiplication d’une valeur donnée en paramètre. 
// Avant l'appel à la fonction la valeur doit être saisie par l'intermediaire d'une fenêtre de dialogue.




var nombre = prompt("Saisissez le nombre")

function tablem(nbre){
    for(var i = 1; i <= 10; i++){
        console.log("La valeur "+ nbre +" multiplié par "+ i +" est égale à "+nbre * i);
    }
}
tablem(nbre);



// var nbre = prompt("Saississez le nombre")
// var tablem = [1,2,3,4,5,6,7,8,9,10]
// Je veux faire nbre*tablem (donc chaque valeur a l'interieur de mon tableau)
function tablem(nbre){
    var resultat = 0;
    for(var i = 1; i <= 10; i++){
        // resultat += nbre,"*",i,"=",nbre*i;
        resultat += nbre+" * "+i+" = ",+nbre*i+"\n";
        // \n saut de lignes
        // += une sorte d'incrementation 
        // concatené avec des virgules font qu'elles deviennent des virgules
        // console.log("La valeur "+ nbre +" multiplié par "+ i +" est égale à "+nbre * i);
    }
    // console.log(resultat);
    return resultat;
}

console.log(tablem(nombre));

    


