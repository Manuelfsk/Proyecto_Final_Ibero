import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal: any

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
  telefono: number = 0
  confirmarpass: string = ""

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
          this.telefono = res.respuesta.data[0].telefono
      }
    )
  }

  ActualizarPass() {
    if (this.password != this.confirmarpass) {
      Swal.fire({
        icon: "error",
        title: "Se presentó un problema",
        text: "Su password no es igual en los campos seleccionados"
      });
    } else {
      let post = {
        Host: this.peticion.urlhost,
        path: "/usuarios/actualizarpass",
        payload: {
          password: this.password
        }
      }
      this.peticion.Post(post.Host + post.path, post.payload).then(
        (res: any) => {
          console.log(res)
          if (res.state == true) {
            Swal.fire({
              icon: "success",
              title: "perfecto",
              text: res.mensaje,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "ouchh!!!1",
              text: res.mensaje,
            });
          }
        }
      )


    }
  }



}
