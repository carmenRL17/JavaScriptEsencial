"use strict"
// para poder usar el parametro en una funcion usamos ...nombreDelParametro

function cocinar(ingrediente1, ingrediente2,... masIngredientes) {
    console.log("Primer ingrediente "+ ingrediente1);
    console.log("SegundoIngrediente "+ingrediente2);
    console.log("los demas ingredientes son: "+ masIngredientes);
    
}

cocinar("pollo", "tomate","zanahoria" , "peino", "lechuga","chile");