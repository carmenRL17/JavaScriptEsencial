"use strict"
//para usar el parametro de spread, es deceir usar un parametro que se puede exparsir.
//la coma (,)y el signo mas (+), nos ayuda a visualizar los parametros rest y spread

function cocinar(ingrediente1, ingrediente2, ingrediente3) {
    console.log("ingrediente 1 es : "+ ingrediente1);
    console.log("ingrediente 2 es : "+ ingrediente2);
    console.log("ingrediente 3 es : ", ingrediente3);
    
}
var primerosIngredient=["pollo","chile"];
cocinar(...primerosIngredient,"aguacate");