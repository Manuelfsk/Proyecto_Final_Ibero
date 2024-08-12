import { Component } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { EstadoCarrito } from 'src/app/interfaces/state.Model';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { borrarproductos, borrartodosproductos } from 'src/app/ngrx/carritoAcciones';

@Component({
  selector: 'app-carrito-ventas',
  templateUrl: './carrito-ventas.component.html',
  styleUrls: ['./carrito-ventas.component.css']
})
export class CarritoVentasComponent {
  productosNGRX: ShopComponent[] = []
  totalcompraNGRx: number = 0

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.traerProductos()
    
  }

  traerProductos() {
    this.store.pipe(select('cartState')).subscribe((state: EstadoCarrito) => {
      this.productosNGRX = state.productos
      this.totalcompraNGRx = state.totalcompras
      console.log(state)
    })
  }

  EliminarProducto(_id: string, precio: number) {
    this.store.dispatch(borrarproductos({_id, precio}))
  }
}
