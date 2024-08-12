import { createReducer, on } from "@ngrx/store";
import { agregarproductos, borrarproductos, borrartodosproductos } from "./carritoAcciones";
import { EstadoCarrito } from "../interfaces/state.Model";

export const initialState: EstadoCarrito = {
    productos: [],
    totalcompras: 0
}

export const carritoReducer = createReducer(
    initialState,

// logica para agregar productos al carrito
    on(agregarproductos, (state, { producto }) => {
        // console.log(state)
        return{productos: [...state.productos, producto],
        totalcompras:state.totalcompras + producto.precio
        }
    }),

// logica para borrar productos del carrito
    on(borrarproductos, (state, { _id, precio }) => {
        console.log(_id);
        console.log("----------->");
        console.log(precio);
        console.log("----------->");
        const productos= state.productos.filter(producto => producto._id !== _id); 
        console.log(productos);
        return {productos,totalcompras:state.totalcompras -  precio};
        
        
    }))





