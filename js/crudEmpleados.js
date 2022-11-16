class Empleado{
    constructor(matricula, nombre, puesto, depto){
        this.matricula = matricula,
        this.nombre = nombre,
        this.puesto = puesto,
        this.depto = depto

    }
}

class CrudEmpleado{

    llamarTablaEmpleado(){
        let jsonEmpleado = localStorage.getItem("TablaEmpleado");
        const arrayEmpleado = (jsonEmpleado != null) ? JSON.parse(jsonEmpleado) : [];
        return arrayEmpleado.map((elemento) =>{
            return new Empleado(elemento.matricula, elemento.nombre, elemento.puesto, elemento.depto);

        });             
    }

    

    guardarTablaEmpleado(arrayEmpleado){
        let jsonEmpleado = JSON.stringify(arrayEmpleado);
        localStorage.setItem("TablaEmplaedo", jsonEmpleado);
    }

    create(){

    }

    read(){

    }

    update(){

    }

    delete(){

    }





}