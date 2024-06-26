
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';

import { ContactusComponent } from './components/contactus/contactus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LocationComponent } from './components/location/location.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ScapesComponent } from './components/scapes/scapes.component';
import { ActivarComponent } from './components/activar/activar.component';
// import { NavbarComponent } from '/components/navbar/NavbarComponent';
// import { CollagesComponent } from './components/scapes/CollagesComponent';





// RUTAS DE NAVEGACION
const routes: Routes = [

  //A. rutas header y footer
  // { path: '/navbar', component: NavbarComponent, pathMatch: "full" },
  // { path: '/footer', component: FooterComponent, pathMatch: "full" },


  //1. ruta home
  { path: "", component: BodyhomeComponent, pathMatch: "full" },
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
  // 7. ruta dashboard
  { path: "dashboard", component: DashboardComponent, pathMatch: "full" },
  // 8. ruta categorias
  { path: "categorias", component: CategoriasComponent, pathMatch: "full" },
  // 9. ruta productos
  { path: "productos", component: ProductosComponent, pathMatch: "full" },
  // 10. ruta usuarios
  { path: "usuarios", component: UsuariosComponent, pathMatch: "full" },
  // 11. ruta photography
  { path: 'photography', title: 'Photography', component: PhotographyComponent, pathMatch: "full" },
  // 12. ruta scapes
  { path: 'scapes', title: 'Scapes', component: ScapesComponent, pathMatch: "full" },
  // 13. ruta activar
  { path: "activar/:correo/:codigo", component: ActivarComponent, pathMatch: "full" },

];

@NgModule({


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
