

import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare let $: any
declare let Swal: any


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ngOnInit(): void {
    this.CargarTdoas()
    this.CargarTdoasCategorias()

  }

  constructor(private peticion: PeticionService) { }

  Idseleccionado: string = ""
  imagen: string = ""
  cod_cat: string = ""
  cod_prod: string = ""
  nombre: string = ""
  precio:number = 0
  estado: number = 1
  datos: any[] = []
  datosCategorias: any [] = []

  AbrirModal() {
    console.log(this.estado)
    console.log(this.datosCategorias[0].cod_cat)
    this.imagen = "http://localhost:3000/imagenes/default.png"
    this.cod_cat = this.datosCategorias[0].cod_cat
    this.cod_prod = ""
    this.nombre = ""
    this.precio = 0
    this.estado = 1
    this.Idseleccionado = ""

    $('#modalnuevo').modal('show')
  }

  CargarTdoasCategorias() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/categorias/read",
      payload: {

      }

    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        this.datosCategorias = res.respuesta.data
        console.log("----------->>>>>")
        console.log(this.datosCategorias)

      }
    )
  }

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
  Guardar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/productos/create",
      payload: {
        imagen: this.imagen,
        cod_cat:this.cod_cat,
        cod_prod: this.cod_prod,
        nombre: this.nombre,
        precio: this.precio,
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
      path: "/productos/readId",
      payload: {
        _id: id
      }
    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        this.imagen= res.respuesta.data[0].imagen
        this.cod_cat= res.respuesta.data[0].cod_cat
        this.cod_prod = res.respuesta.data[0].cod_prod
        this.nombre = res.respuesta.data[0].nombre
        this.precio= res.respuesta.data[0].precio
        this.estado = res.respuesta.data[0].estado
        $('#modalnuevo').modal('show')
      }
    )
  }
  Actualizar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/productos/update",
      payload: {
        imagen:this.imagen,
        cod_cat: this.cod_cat,
        _id: this.Idseleccionado,
        nombre: this.nombre,
        precio: this.precio,
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
      path: "/productos/delete",
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
