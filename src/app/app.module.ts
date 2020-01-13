import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list-component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductRoutGuard } from './products/product-route-guard';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    WelcomeComponent,
    StarComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent},
      {path:'products/:id', component:ProductDetailComponent,canActivate:[ProductRoutGuard]},
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome'},
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
