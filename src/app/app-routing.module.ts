import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';
import { CollagesComponent } from './components/collages/collages.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LocationComponent } from './components/location/location.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';


const routes: Routes = [

  //A. rutas header y footer
  // { path: '/navbar', component: NavbarComponent, pathMatch: "full" },
  // { path: '/footer', component: FooterComponent, pathMatch: "full" },
  

  //1. ruta home
  { path: "",  component: BodyhomeComponent, pathMatch: "full" },
  //2.ruta gallery
  { path: "gallery", component: GalleryComponent, pathMatch: "full" },
  //3.ruta shop
  { path: "shop", component: ShopComponent, pathMatch: "full" },
  //4. ruta contact us
  { path: "contactus", component: ContactusComponent, pathMatch: "full" },
  //5. ruta login
  { path: "login", component: LoginComponent, pathMatch: "full" },
  //6. ruta location
  { path: "location", component: LocationComponent, pathMatch: "full" },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
