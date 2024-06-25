import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare let $: any
declare let Swal: any

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  ngOnInit(): void {
    this.CargarTdoas()
  }

  constructor(private peticion: PeticionService) { }

  Idseleccionado: string = ""
  cod_cat:string = ""
  cod_prod: string = ""
  nombre: string = ""
  estado: number = 1
  datos: any[] = []

  AbrirModal() {
    console.log(this.estado)
    this.cod_prod = ""
    this.nombre = ""
    this.estado = 1
    this.Idseleccionado = ""

    $('#modalnuevo').modal('show')
  }
  CargarTdoas() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/categorias/read",
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
      path: "/categorias/create",
      payload: {
        cod_cat: this.cod_cat,
        nombre: this.nombre,
        estado: this.estado
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
      path: "/categorias/readId",
      payload: {
        _id: id
      }
    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        this.cod_prod = res.respuesta.data[0].cod_prod
        this.nombre = res.respuesta.data[0].nombre
        this.estado = res.respuesta.data[0].estado
        $('#modalnuevo').modal('show')
      }
    )
  }
  Actualizar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/categorias/update",
      payload: {
        _id: this.Idseleccionado,
        nombre: this.nombre,
        estado: this.estado
      }

    }
    this.peticion.Put(post.Host + post.path, post.payload).then(
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
        }else{
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
      path: "/categorias/delete",
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





