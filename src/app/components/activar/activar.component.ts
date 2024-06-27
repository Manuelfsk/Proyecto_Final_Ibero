import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $: any

@Component({
  selector: 'app-activar',
  templateUrl: './activar.component.html',
  styleUrls: ['./activar.component.css']
})
export class ActivarComponent implements OnInit {

  constructor(private  peticion: PeticionService, private actroute: ActivatedRoute) { }

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
        codigo: this.codigo

      }
    }
    this.peticion.Post(post.Host + post.path, post.payload).then(
      (res: any) => {
        console.log(res)
        // $('#modalnuevo').modal('show')
      }
    )
  }





}
