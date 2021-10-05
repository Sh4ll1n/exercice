// Faire un script permettant de vérifier si une année est bissextile ou pas. 
// NB : Une année bissextile (ou un an bissextil) est une année comportant 366 jours au lieu de 365 jours pour une année commune. 
// Depuis l'ajustement du calendrier grégorien, l'année n’est bissextile (elle aura 366 jours) que dans l’un des deux cas suivants : 
// 1. si l'année est divisible par 4 et non divisible par 100 ; 
// 2. si l'année est divisible par 400 (« divisible » signifie que la division donne un nombre entier, sans reste).
// 1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868, 1872, 1876, 1880, 1884, 1888, 1892, 1896, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020

// var annee = prompt("Est-elle bissextile ?");
// annee = parseInt(annee);
// var bissex = annee / 4;


// if(bissex == Number.isInteger){
//     console.log(annee + " est bissextile !");
// }
// else{
//     console.log(annee + " n'est pas bissextile...");
// }


// var annee = prompt("Est-elle bissextile ?");
// annee = parseInt(annee);

// switch(bissex){
//     case isInteger:
//         console.log(annee + " est bissextile !");
//             break;
//     case 
// }

// var annee = prompt("Est-elle bissextile ?");
// annee = parseInt(annee);
// function 
// if (Number.isInteger(annee/4)){
//     return annee +' est bissextile'; {
//     }
//     return annee +"n'est pas bissextile";
// }

var annee = prompt("L'année est-elle bissextile ?");
console.log(annee);

if(annee%4 == 0 && annee/100 != 0){ // || (annee%4 == 0)
    console.log(annee + " est bissextile")
}
else if(annee%4 == 0){
    console.log(annee + " est bissextile")
}
else
    console.log(annee + " n'est pas bissextile")



var pair = prompt("Est un nombre pair ?")
console.log(pair);

if(pair == 0,2,4,6,8 ){
    console.log(pair + " est pair")
}
else
    console.log(pair + " est impair")