"use strict"
//los callback son funciones que toman como argumento 

function calcular(num1, num2, sumaCB, restaCB){
    var suma = num1+num2;
    var resta = num1 - num2;

    sumaCB(suma);
    restaCB(resta);

}
calcular(12, 5, function(resultado){
    console.log('la suma es:',resultado);
}, function(resultado){
    console.log('la resta es:',resultado);
});