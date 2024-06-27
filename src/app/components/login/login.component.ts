import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var Swal: any


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private peticion: PeticionService, private router: Router) { }


  ngOnInit(): void {

  }

  
  email: string = ""
  password: string = ""
  datos: any[] = []

  logear() {
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/login",
      payload: {
        email: this.email,
        password: this.password,
       
      }
    }

    console.log(this.email)
    console.log("--------tratando-----")
    console.log(this.password)
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        if (res.state == true) {
          Swal.fire({
            icon: "success",
            title: "Bienvenido a Altschmerz Ilustration",
            text: res.mensaje,
          });
          // acceso a la zona privada
          this.router.navigate(["dashboard"])
        } else {
          Swal.fire({
            icon: "error",
            title: "Ouch!!!!",
            text: res.mensaje,
          });
        }
      })




  }



}
