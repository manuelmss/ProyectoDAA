import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { ProductoComponent } from './producto.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
