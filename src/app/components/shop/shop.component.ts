import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  ngOnInit(): void {
    this.CargarTdoas()
  }

  constructor(private peticion: PeticionService) { }
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
}
