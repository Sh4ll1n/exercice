function saisies(/*event*/){
    //event.preventDefault();

var checkMr = document.querySelector("#mr");
var checkMiss = document.querySelector("#miss");

    if(!checkMr.checked && !checkMiss.checked){ // ! devant la condition permet de dire c'est l'inverse. checked pour les radio et checkbox permet de voir si ya qqch dedans
        alert("Saisir votre civilité");
        return false;
    }
    //document.querySelector('#submit').onclick = function(){
    if (document.querySelector('#fname').value == "") {
        alert("Veuillez saisir le champs de saisies First Name");
        return false;
        }
                
    //}   
    
    
}

// if (document.querySelector('#fname').value === "") {
    //     alert("Veuillez saisir le champs de saisies");
    // }
    

// document.querySelectorAll('input').forEach(element =>{ if    (element.value == ""){
//         alert("Veuillez saisir" + element.value)
//         }
        
//         });




