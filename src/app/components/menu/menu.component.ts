import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal: any


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private peticion: PeticionService, private router: Router) { }
  ngOnInit(): void {
    this.CargarEstado()
  }
//agregar campos
  nombre: string = "cargando nombre..."
  rol: string = "cargando rol..."
  email: string = ""
  password: string = ""
  _id: string = "default"

  CerrarSession() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/logout",
      payload: {

      }
    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        Swal.fire({
          icon: "error",
          title: "Session Terminada",
          text: res.mensaje,
        });
        this.router.navigate(["/login"])
      })
}

CargarEstado() {
  let post = {
    Host: this.peticion.urlhost,
    path: "/usuarios/state",
    payload: {
      email: this.email,
      password: this.password,
      rol:this.rol
    }
  }
this.peticion.Post(post.Host + post.path, post.payload).then(
    (res: any) => {
      console.log(res)
      if (res.nombre == "" || res.nombre == undefined) {
        this.router.navigate(["/login"])
      }
      this.nombre = res.nombre
      this.rol = res.rol
      this._id = res._id
      console.log(this.nombre)
        console.log(this.rol)
    })
  }
}