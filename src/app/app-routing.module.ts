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
{path:'home', title:'Home', component:NavbarComponent},
{path:'gallery', title:'Gallery', component:GalleryComponent},
{path:'collages', title:'Collages', component:CollagesComponent},
{path:'contactus', title:'Contac Us', component:ContactusComponent},
{path:'login', title:'Login', component:LoginComponent},
{path:'location', title:'Location', component:LocationComponent},
{path:'shop', title:'Shop', component:ShopComponent},
{path:'photography', title:'Photography', component:PhotographyComponent},
{path:'scapes', title:'Scapes', component:ScapesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
