//funciones de flecha o arrow ---Fat Arrow -- lambda
//son otra manera de escribir funciones anonimas 

var saludar = nombre =>'hola'+ nombre;
console.log(saludar("Carmen"));

var suma = cantidad => cantidad + 10;
console.log(suma(10));

var calcular = (dato1, dato2) => dato1+dato2
console.log(calcular(10,15));

var generar = (dato1,dato2) =>{
    var dato3=5;
    return dato1+dato2+dato3;
}
console.log(generar(5,6));
