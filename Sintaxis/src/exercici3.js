var visites_maximes = 2; //Aquí estamos declarando una variable tipo const para las visitas máximas, que van a ser dos
var nom_de_la_pagina = "Aquesta es la meva pagina"; //Aquí estamos delcarando una variable, también es de tipo const, y lo que estamos haciendo es darle un nombre a la pàgina
var comptador_de_visites = 0; //En esta variable de aquí le estamos asignando el numero que va a tener el contador, que va a ser 0
var missatge_de_benvinguda = "Esteu dins del limit per visitar la pagina"; //Aquí estamos declarando la variable tipo let del mensaje de bienvenida
console.log(nom_de_la_pagina); //Aquí estamos imprimiendo el nombre de la pagina
do { //Aquí estamos indicando que lo que queremos que se repita siempre sea que el contador augmente y que se repita el mensaje de bienvenida
    console.log(missatge_de_benvinguda);
    comptador_de_visites++;
} while (comptador_de_visites < visites_maximes);
{ //En caso de que el contador de visitas sea más
    console.log("No podeu accedir més a aquesta pàgina");
}
