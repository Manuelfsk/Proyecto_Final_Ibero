import { state } from '@angular/animations';
import { Component } from '@angular/core';
// import de ngrx
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { EstadoCarrito } from 'src/app/interfaces/state.Model';
import { ShopComponent } from '../shop/shop.component';




@Component({
  selector: 'app-notificaciones-car',
  // standalone: true, 
  templateUrl: './notificaciones-car.component.html',
  styleUrls: ['./notificaciones-car.component.css']
})
export class NotificacionesCarComponent {
  constructor(private store: Store<AppState>) { }

  productosNGRX: ShopComponent[] = []


  traerProductos() {
    this.store.pipe(select('cartState')).subscribe((state: EstadoCarrito) => {
      this.productosNGRX = state.productos
      console.log(this.productosNGRX)
      console.log("carritonotificacion----> ")
    })
  }

  ngOnInit(){
    this.traerProductos()
  }
}
