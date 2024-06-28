import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare let $: any
declare let Swal: any


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ngOnInit(): void {
    this.CargarTdoas()

  }

  constructor(private peticion: PeticionService) { }

  Idseleccionado: string = ""
  imagen: string = ""
  nombre: string = ""
  apellidos: string = ""
  email: string = ""
  password: string = ""
  telefono: number = 0
  estado: number = 1
  rol: number = 1
  datos: any[] = []


  AbrirModal() {
    console.log(this.estado)
    console.log(this.datos[0].nombre)
    this.imagen = "http://localhost:3000/imagenes/default.png"
    this.nombre = ""
    this.apellidos = ""
    this.email = ""
    this.password = ""
    this.telefono = 0
    this.estado = 1
    this.rol = 1
    this.Idseleccionado = ""

    $('#modalnuevo').modal('show')
  }
  
  CargarTdoas() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/read",
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
  Guardar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/create",
      payload: {
        imagen: this.imagen,
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        password: this.password,
        telefono:this.telefono,
        estado: this.estado,
        rol:this.rol
      }

    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        if (res.state == true) {
          $('#modalnuevo').modal('hide')
          this.CargarTdoas()

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

      }
    )
  }
  EditarId(id: string) {
    this.Idseleccionado = id
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/readId",
      payload: {
        _id: id
      }
    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        this.imagen = res.respuesta.data[0].imagen
        this.nombre = res.respuesta.data[0].nombre
        this.apellidos = res.respuesta.data[0].apellidos
        this.email = res.respuesta.data[0].email
        this.telefono = res.respuesta.data[0].telefono
        this.estado = res.respuesta.data[0].estado
        this.rol = res.respuesta.data[0].rol
        $('#modalnuevo').modal('show')
      }
    )
  }
  Actualizar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/update",
      payload: {
        
        _id: this.Idseleccionado,
        imagen: this.imagen,
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        telefono:this.telefono,
        estado: this.estado,
        rol:this.rol,
      }
    
    }
    console.log(this.apellidos)
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        if (res.state == true) {
          $('#modalnuevo').modal('hide')
          this.CargarTdoas()
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

      }
    )
  }
  Eliminar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/delete",
      payload: {
        _id: this.Idseleccionado
      }

    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        if (res.state == true) {
          $('#modalnuevo').modal('hide')
          this.CargarTdoas()
          Swal.fire({
            icon: "success",
            title: "Perfecto",
            text: res.mensaje,

          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Hay un problema",
            text: res.mensaje,

          });
        }
      }
    )
  }

}




