import { createAction, props } from "@ngrx/store";
import { ShopComponent } from "../components/shop/shop.component";


// agregar productos al carrito
export const agregarproductos = createAction(
    "[shop Component] agregar productos",
    props<{ producto: ShopComponent }>()
)
// borrar productos del carrito
export const borrarproductos = createAction(
    "[carrito-ventas Component] borrar uno por uno los productos",
    props<{ _id: string, precio: number }>()
)
// remover todoslos productos del carrito
export const borrartodosproductos = createAction(
    "[carrito-ventas Component] borrar todos productos",

)