var visites_maximes = 2;
var nom_de_la_pagina = "Aquesta es la meva pagina";
console.log(nom_de_la_pagina);
var comptador_de_visites = 0;
var missatge_de_benvinguda = "Esteu dins del limit per visitar la pagina";
comptador_de_visites++;
if (comptador_de_visites <= visites_maximes) {
    console.log(missatge_de_benvinguda);
}
else {
    console.log("No podeu accedir més a aquesta pàgina");
}
comptador_de_visites++;
if (comptador_de_visites <= visites_maximes) {
    console.log(missatge_de_benvinguda);
}
else {
    console.log("No podeu accedir més a aquesta pàgina");
}
comptador_de_visites++;
if (comptador_de_visites <= visites_maximes) {
    console.log(missatge_de_benvinguda);
}
else {
    console.log("No podeu accedir mes a aquesta pagina");
}
