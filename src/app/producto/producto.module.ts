import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ProductoComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
