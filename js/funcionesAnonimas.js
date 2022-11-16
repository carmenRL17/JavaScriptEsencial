"use strict"
/*las funcines anonimas sn un amplia recurso, esto nos permite no asignarle un nombre a un conjuntode instrucciones que deseemos ejecutarlo sin neesidad de asociarlo
se utiliza cuando usamos un callback o cuando queremos aislar una funcion de algun otro elemento
*/

//aislar una funcion  con dos pares de parentesis seguidos
//sin emabrgo el "use strict " nos impide ejecutar este tipo de funciones
/*(
    function(){
        let mensaje ="Donde esta LUNES? 🤔"
        console.log(mensaje);
    }

)()*/

//Esta es una forma diferente de hacer funciones anonimas 
var pelicula = function(nombre){
    var mensaje = 'Que le paso a 😵'+ nombre ;
    console.log(mensaje);

}
(
    function(){
        let mensaje ="Donde esta LUNES? 🤔"
        console.log(mensaje);
    }
)()

function x() {
    function y() {
        console.log("Hola carmen");
    }

    return y;
}


const y = x();
y();

x()();