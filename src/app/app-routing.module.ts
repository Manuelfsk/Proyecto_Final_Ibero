import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';
import { Carrusel1Component } from './components/carrusel1/carrusel1.component';
import { CollagesComponent } from './components/collages/collages.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { ShopComponent } from './components/shop/shop.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ScapesComponent } from './components/scapes/scapes.component';









const routes: Routes = [
{path:'home', title:'Home', component:NavbarComponent,pathMatch:"full"},
{path:'gallery', title:'Gallery', component:GalleryComponent,pathMatch:"full"},
{path:'collages', title:'Collages', component:CollagesComponent,pathMatch:"full"},
{path:'contactus', title:'Contac Us', component:ContactusComponent,pathMatch:"full"},
{path:'login', title:'Login', component:LoginComponent,pathMatch:"full"},
{path:'location', title:'Location', component:LocationComponent,pathMatch:"full"},
{path:'shop', title:'Shop', component:ShopComponent,pathMatch:"full"},
{path:'photography', title:'Photography', component:PhotographyComponent,pathMatch:"full"},
{path:'scapes', title:'Scapes', component:ScapesComponent,pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
