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


const routes: Routes = [

  //A. rutas header y footer
  { path: '/footer', component: FooterComponent, pathMatch: "full" },
  { path: '/navbar', component: NavbarComponent, pathMatch: "full" },

  //1. ruta home
  { path: '/home', title: 'Home', component: NavbarComponent, pathMatch: "full" },
  //2.ruta gallery
  { path: '/gallery', title: 'Gallery', component: GalleryComponent, pathMatch: "full" },
  //3.ruta shop
  { path: '/shop', title: 'Shop', component: ShopComponent, pathMatch: "full" },
  //4. ruta contact us
  { path: '/contactus', title: 'Contac Us', component: ContactusComponent, pathMatch: "full" },
  //5. ruta login
  { path: '/login', title: 'Login', component: LoginComponent, pathMatch: "full" },
  //6. ruta location
  { path: '/location', title: 'Location', component: LocationComponent, pathMatch: "full" },

  { path: '/collages', title: 'Collages', component: CollagesComponent, pathMatch: "full" },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
