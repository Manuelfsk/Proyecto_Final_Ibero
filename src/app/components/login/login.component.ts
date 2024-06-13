import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private peticion:PeticionService){
    
  }

  emailogin:string = ""
  password:string = ""
  datos:any[] =[]

  logear(){
    console.log(this.emailogin)
    console.log(this.password)

    this.datos.push({emailogin: this.emailogin, password:this.password})
    console.log(this.datos)
  }



}
