import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodyhome',
  templateUrl: './bodyhome.component.html',
  styleUrls: ['./bodyhome.component.css']
})
export class BodyhomeComponent implements OnInit{

constructor (private router: Router){}



ngOnInit(){

}


navegar(){
this.router.navigate(['../navbar']);
}

}
