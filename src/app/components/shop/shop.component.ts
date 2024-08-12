import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { NotificacionesCarComponent } from '../notificaciones-car/notificaciones-car.component';
// import de ngrx
import { Store } from '@ngrx/store';
import { agregarproductos } from 'src/app/ngrx/carritoAcciones';




@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
   
  ngOnInit(): void {
    this.CargarTdoas()
  }

  constructor(private peticion: PeticionService, private store: Store) { }

  _id:string = ""
  imagen: string = ""
  nombre: string = ""
  precio: number = 0
  datos: any[] = []

  CargarTdoas() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/productos/read",
      payload: {

      }

    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        this.datos = res.respuesta.data

      }
    )
  }

agregaralcarrito(producto:ShopComponent){
this.store.dispatch(agregarproductos({producto}))
console.log(this.agregaralcarrito)
// console.log(producto)
}


}
