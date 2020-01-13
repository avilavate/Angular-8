import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from './home/welcome.component';
import { ProductRoutGuard } from './products/product-route-guard';
import { ProductModule } from './products/product.module';
import { ProductListComponent } from './products/product-list-component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
   
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome'},
      ]),
    ProductModule
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
