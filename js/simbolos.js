"use strict"

//solo se invoca la funcion de symbol,es solo una funcion que se esta invocando de javascript
//su valor es unico e inmutable
 var simbolo1 = Symbol('');
 var simbolo2 = Symbol();

 var ambiente = Symbol('dev');//determina el estado en que se encuentran

 /*
 simbolo1 y simbolo2 aunque apaentemente tienen el mismo valor no es igual.
 var = new symbol(); ---> esto es un error ya que el simbol no es un constructor.no esta diseniado de esta manera.
  */