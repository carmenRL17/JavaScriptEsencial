/* Que es JSON? ---> En sis siglas en ingles es JavaScritp Object Notation, es un formato de untercambio de datos ligero, descriptivo 
por que utiliza la estructura de objeto

*/
var persona = {nombre:'Carmen',twitte:'dcCarmen'};

var personas = [
    {nombre:'Carmen',twitte:'dcCarmen'},
    {nombre:'Antonio',twitte:'dcAntonio'},
    {nombre:'Sol',twitte:'dcSol'},
    persona

]
 var personaJSON = JSON.stringify(personas);//convierte en cadena de texto
 var nuevaPersona = JSON.parse(personaJSON);