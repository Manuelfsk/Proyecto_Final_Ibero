//por qué me sale este archivo?


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Carrusel1Component } from './components/carrusel1/carrusel1.component';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CollagesComponent } from './components/collages/collages.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { ShopComponent } from './components/shop/shop.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ScapesComponent } from './components/scapes/scapes.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    Carrusel1Component,
    BodyhomeComponent,
    FooterComponent,
    GalleryComponent,
    CollagesComponent,
    ContactusComponent,
    LoginComponent,
    LocationComponent,
    ShopComponent,
    PhotographyComponent,
    ScapesComponent,

  ],

  imports: [
    BrowserModule,
    // RoutingModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
