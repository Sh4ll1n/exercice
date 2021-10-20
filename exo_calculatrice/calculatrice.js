// Créez une page « calculatrice.html ».
// La page calculatrice contient un formulaire avec une sélection déroulante qui nous permet de choisir le signe
// de l’opération (addition, soustraction, multiplication, division) :
// Exemple :
// Ces informations sont transmises et ensuite calculées.
// Exemple :
// Dans une alerte: L’opération saisie suivi du signe égal et du résultat.

function calcul(event){
    
    event.preventDefault();

    var num1 = parseInt(document.querySelector("#num1").value);
    var op = document.querySelector("#op").value;
    var num2 = parseInt(document.querySelector("#num2").value);

    var result = 0
    switch (op) {
        case "+":
            result = num1+num2;
            break;
        case "-":
            result = num1-num2;
            break;
        case "*":
            result = num1*num2;
            break;
        case "/":
            result = num1/num2;
            break;
        case "%":
            result = num1%num2;
            break;

    }
        alert(document.querySelector('#resultat').value = num1 + op + num2 + "=" + result)
        // document.querySelector('#resultat').value = result
        
}

// Effectuer deux liens pointant sur la même page :
// Faire apparaître la calculatrice / Faire disparaître la calculatrice
// Le formulaire de la calculatrice apparait et disparait autant de fois que l’on clique sur ses deux liens.

document.querySelector('.calculatrice').onclick = function(){
    document.querySelector('#form').style.display = "block";
    document.querySelector('#form').style.background = "blue";

}
document.querySelector('.nocalculatrice').onclick = function(){
    document.querySelector('#form').style.display="none";
}

// Effectuer une zone d’information s’affichant au survol des éléments :


document.querySelector('#num1').onmouseover = function(){
    document.querySelector('#info').style.display = "block";
    document.querySelector('#info').value = "Mettre un chiffre";
    document.querySelector('#info').style.background = "yellow";
    
}
document.querySelector('#num1').onmouseout = function(){
    document.querySelector('#info').style.display = "none";
}
document.querySelector('#num2').onmouseover = function(){
    document.querySelector('#info').style.display = "block";
    document.querySelector('#info').value = "Mettre un chiffre";
    document.querySelector('#info').style.background = "yellow";
}
document.querySelector('#num2').onmouseout = function(){
    document.querySelector('#info').style.display = "none";
}
document.querySelector('#op').onmouseover = function(){
    document.querySelector('#info').style.display = "block";
    document.querySelector('#info').value = "Mettre un opérateur";
    document.querySelector('#info').style.background = "yellow";
}
document.querySelector('#op').onmouseout = function(){
    document.querySelector('#info').style.display = "none";
}