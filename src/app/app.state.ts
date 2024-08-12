import { ShopComponent } from "./components/shop/shop.component";
import { EstadoCarrito } from "./interfaces/state.Model";


export interface AppState{
    // productos: ShopComponent[];
    // totalcompras: number;
    readonly cartState: EstadoCarrito
}