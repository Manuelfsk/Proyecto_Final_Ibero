import { HttpClient } from '@angular/common/http';
import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal: any

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private peticion: PeticionService, private http: HttpClient) { }
  ngOnInit(): void {
    this.Cargar()

  }
  //creacion de campos
  nombre: string = ""
  apellidos: string = ""
  email: string = ""
  password: string = ""
  telefono: number = 0
  confirmarpass: string = ""
  selectfile: any = {
    name: ""
  }




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

  ActualizarDatos() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/actualizarDatos",
      payload: {
        // _id: this.Idseleccionado,
        // nombre: this.nombre,
        telefono: this.telefono
      }

    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        if (res.state == true) {

          this.Cargar()
          Swal.fire({
            icon: "success",
            title: "Datos Actualizados Correctamente ",
            text: res.mensaje,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Se presentó un problema al actualizar datos",
            text: res.mensaje,
          });
        }

      }
    )
  }
  ArchivoSeleccionado(event: any) {
    console.log(event)
    this.selectfile = event.target.files[0]
    console.log(this.selectfile)



  }
  UploadImg() {
    const formData = new FormData
    formData.append('image', this.selectfile, this.selectfile.name)

    let post = {
      Host: this.peticion.urlhost,
      path: "/CargarImagen"
    }

    this.http.post(post.Host + post.path, formData).subscribe((res: any) => {
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
          title: "Hay un problema",
          text: res.mensaje,
        });
      }
    }, (error) => {
      console.log(error)
    })

  }
}









