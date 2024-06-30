import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private peticion: PeticionService) { }
  ngOnInit(): void {
    this.Cargar()
  }
  nombre: string = ""
  apellidos: string = ""
  email: string = ""
  password: string = ""
  nuevo_password: string = ""
  telefono: number = 0

  Cargar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/perfil",
      payload: {


      }
    }
  this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
          this.nombre = res.respuesta.data[0].nombre,
          this.apellidos = res.respuesta.data[0].apellidos,
          this.email = res.respuesta.data[0].email,
          this.password = res.respuesta.data[0].password,
          this.nuevo_password = res.respuesta.data[0].nuevo_password,
          this.telefono = res.respuesta.data[0].telefono
      }
    )
  }
}
