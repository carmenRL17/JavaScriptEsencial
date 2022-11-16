//las promesas son funciones que se ejecutan en segundo grado para no interumpir el hilo principal.
// implementacion de promesas de modo tradicional,

function suma(a,b){
    return new Promise((resolve, reject) =>{
        try{
            let resultado = a + b;
            resolve(resultado);
        }catch(error){
            reject(error);
        }
    });

}

suma(23, 56).then((resultado) => {
    console.log(`la promesa fue exitosa: ${resultado}`);
}).catch((error) => {
    console.log(`la promesa no tuvo exito: ${error}`);
});

