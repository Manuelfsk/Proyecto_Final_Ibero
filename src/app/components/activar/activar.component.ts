import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $: any
declare var Swal: any

@Component({
  selector: 'app-activar',
  templateUrl: './activar.component.html',
  styleUrls: ['./activar.component.css']
})
export class ActivarComponent implements OnInit {

  constructor(private  peticion: PeticionService, private actroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.email = this.actroute.snapshot.params["correo"]
    this.codigo = this.actroute.snapshot.params["codigo"]
  }
  email: string = ""
  codigo: string = ""




  Activar() {
    
    let post = {
      Host: this.peticion.urlhost,
      path: "/usuarios/activar",
      payload: {
        email: this.email,
        codigoact: this.codigo

      }
    }
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
          this.router.navigate(["/login"])
        } else {
          Swal.fire({
            icon: "error",
            title: "Ouch!!!!",
            text: res.mensaje,
          });
        }
      }
    )
  }





}
