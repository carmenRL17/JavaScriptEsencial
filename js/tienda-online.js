/**
 * se crea una tienda de articulos varios para implementar funciones asincronas y await.
 * 
 */
const figurasAnimesNaruto = [
    {
        id:1,
        nombre:"Shikamaru",
        precio:450,
        stock:2
    },
    {
        id:2,
        nombre:"Naruto",
        precio:500,
        stock:5
    },
    {
        id:3,
        nombre:"Kakashi",
        precio:450,
        stock:4

    }
];
let ordenDeCompra = [];

class CrudProducto{


    async buscarProductoPorId(id){
        for(let figuras of figurasAnimesNaruto){
            if(id ===figuras.id){
                return figuras;
            }

        }
        return null;
    }

    async actualizarStock(idDelProducto, cantidad){
        for(productos of figurasAnimesNaruto){
            if(idDelProducto === productos.id){
                const nuevoStock =figurasAnimesNaruto.stock - cantidad;
                if(nuevoStock < 0){
                    throw `solo existen ${figurasAnimesNaruto.stock} de la figura ${figurasAnimesNaruto.nombre} `
                }
                figurasAnimesNaruto.stock = nuevoStock;
                return;
            }
        }
    }

    async crearOrden(solicitudDeCompra){
        const ordenDeCompra = {
            id:Date.now(),
            productoSolicitados:[],
            totalAPagar:0,
            errores:[]
        }
        for (let compraEnCarrito of solicitudDeCompra){
            const producto = await this.buscarProductoPorId(compraEnCarrito.id);
            if(producto){
                try{
                    await this.actualizarStock(producto.id, compraEnCarrito.cantidad);
                    ordenDeCompra.totalAPagar += producto.cantidad * compraEnCarrito.cantidad;
                    ordenDeCompra.productoSolicitados.push({
                        ...producto,
                        cantidad : compraEnCarrito.cantidad
                    
                    });

                }catch(error){
                    ordenDeCompra.errores.push(error);
                }
            }else {
                    ordenDeCompra.errores.push(`El producto con id: ${compraEnCarrito.id} en la tienda`);
            }   
        }
        return ordenDeCompra;
    }

}
class ServicioDePagos{
async pagar(peticionPago){
    return{
        tipoDeTarjeta: peticionPago.tipoDeTarjeta,
        tarjeta:peticionPago.tarjeta,
        totalAPagar:peticionPago.totalAPagar,
        estados:"Compra Exitosa"

    }
}
}
class ServicioDeVentas{
    constructor(){
        this.servicioDePago = new ServicioDePagos();
        this.crudProducto = new crudProducto();

    }
    async realizar(productos, mediosDePagos){
        const orden = await this.crudProducto.crearOrden(productos);
        try{
            await this.servicioDePago.pagar({
                tipoDeTarjeta:mediosDePagos.tipoDeTarjeta,
                tarjeta:mediosDePagos.tarjeta,
                totalAPagar:orden.totalAPagar
            });
        }catch(error){
            orden.errores.push(`no fue posible realizar el pago, intente con otro medio de pago `);

        }
        return orden;
    }

}

const serviciosDeVentas = new serviciosDeVentas();
const orden =[
    {
        id:20,
        cantidad:3

    },
    {
        id:2,
        cantidad:6


    }
];

const medioDePago ={
    tipoDeTarjeta:"Tarjeta de Credito",
    tarjeta:"xxxxxxxxxxxxx"
}


