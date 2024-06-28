import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var Swal: any


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private peticion: PeticionService, private router: Router) { }

  ngOnInit(): void {

  }


  nombre: string = ""
  apellidos: string = ""
  email: string = ""
  password: string = ""
  telefono: string = ""

  Registrar() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/create",
      payload: {
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        password: this.password,
        telefono: this.telefono
      }

    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        if (res.state == true) {
          Swal.fire({
            icon: "success",
            title: "perfecto",
            text: res.mensaje,
          });
          this.router.navigate(["/login"])
        }else{
          Swal.fire({
            icon: "error",
            title: "ALGO ANDA MAL",
            text: res.mensaje,
          });
        }
      })
  }




}
