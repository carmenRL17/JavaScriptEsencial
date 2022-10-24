const acciones = () => {
    console.log("Holirri");
}

const intervaloDeTiempo = setInterval(acciones, 1000);

/* en la funcion de setInterval() es un callback que toma con argumnto a una funcion que 
ejecuta una funcion al menos cada determinado tiempo que lo indique

para deterner una funcion setInterval() se utiliza una funcion clearInterval(intervaloDeTiempo) pasando
 como argumento el intervalo que deseamos deterner*/