//por qué me sale este archivo?


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { ShopComponent } from './components/shop/shop.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ScapesComponent } from './components/scapes/scapes.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    BodyhomeComponent,
    FooterComponent,
    GalleryComponent,
    ContactusComponent,
    LoginComponent,
    LocationComponent,
    ShopComponent,
    DashboardComponent,
    MenuComponent,
    ProductosComponent,
    CategoriasComponent,
    UsuariosComponent,
    PhotographyComponent,
    ScapesComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
