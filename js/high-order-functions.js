//las funciones de orden superior es una funcion que toma como parametro a otra funcion,
// Cuando se esta invocando a la funcion de orden superior se toma como argumento a otra funcion.const arr = [1, 2, 3, 4];
const arr = [1, 2, 3, 4];
let fun1 =(elemento) =>{
    console.log(elemento);
}
arr.forEach(fun1);

/* arr.forEach((elemento)=>{
    console.log(elemento);

});*/

/*const arr = [1, 2, 3, 4];
function fakeForEach(callback, arr) {
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    }

}*/