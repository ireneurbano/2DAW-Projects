/*
Explica per què has posat a les variables let, const o var -> Per el const hem posat les visites_maximes, perque son un número que no volem que es torni a declarar ni que es modifiqui,
per al var hem posat el nom de la pagina, ja que es una cosa que sabem que no tornarem a instanciar perque el nom de la pagina només el volem declarar una vegada pero
que es pogui modificar en cas de que faci falta, i per ultim per el let hem posat el comptador de visites i el missatge de benvinguda ja que son dues coses que no volem que es tornin a 
declarar pero pot ser que volguem que es puguin modificar 
*/

/*
const visites_maximes : number = 2; //Aquí estamos declarando una variable tipo const para las visitas máximas, que van a ser dos
var nom_de_la_pagina : string = "Aquesta es la meva pagina"; //Aquí estamos delcarando una variable, también es de tipo const, y lo que estamos haciendo es darle un nombre a la pàgina
let comptador_de_visites : number = 0; //En esta variable de aquí le estamos asignando el numero que va a tener el contador, que va a ser 0
let missatge_de_benvinguda : string = "Esteu dins del limit per visitar la pagina"; //Aquí estamos declarando la variable tipo let del mensaje de bienvenida

console.log(nom_de_la_pagina); //Aquí estamos imprimiendo el nombre de la pagina

comptador_de_visites++; //Primero vamos a aumentar el contador

/*
Aquí lo que estamos haciendo es entrar en un condicional, en este caso, como el contador es 1 y las visitas maximas son dos va a cumplir y nos va a mostrar
el mensaje de bienvenida
*/
/*
if (comptador_de_visites <= visites_maximes){ 
    console.log(missatge_de_benvinguda);
    }
    else{
        console.log("No podeu accedir més a aquesta pàgina");
    }


comptador_de_visites++;
    
if (comptador_de_visites <= visites_maximes){
    console.log(missatge_de_benvinguda);
    }
    else{
        console.log("No podeu accedir més a aquesta pàgina");
    }
    

/*
En este otro caso, como el contador de las visitas va a ser mayor a las visitas maximas no nos va a mostrar el mensaje de bienvenida, así que lo que nos va a mostrar
es un mensaje que le hemos puedo de que no vamos a poder acceder más a la pagina
*/
/*
comptador_de_visites++;

if (comptador_de_visites <= visites_maximes){
    console.log(missatge_de_benvinguda);
    }
    else{
        console.log("No podeu accedir mes a aquesta pagina");
    }