// Ecrire un script qui demande un nombre compris entre 10 et 20, jusqu’à ce que la
// réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un
// message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à
// 10.

/* var nbre = prompt("Saississez un nombre entre 10 et 20");
console.log(nbre);

for(var i = 0; i < nbre; i++){
    if(nbre >= 10 && nbre <= 20){ //inverser
        console.log("Bien joué");
        break;
    }
    else if( nbre < 10 ){
        console.log("Plus grand !")
        prompt("Plus grand !");
        
    }
    else if( nbre > 20 );{
        console.log("Plus petit !")
        prompt("Plus petit"); 
        
}} */

// CORRECTION QUENTIIIIIN; apparement la seule fois où il faut utiliser un do-while. 

var saisie;
saisie = prompt ("Nombre");

do
{
    
    if(saisie > 20)
    {
        console.log("C'est moins");
    }
    else if(saisie < 10)
    {
       console.log("C'est plus");
    }
    saisie = prompt ("Nombre");
}
while(saisie < 10 || saisie > 20);

alert("Bravo, tu as gagné");   
    


