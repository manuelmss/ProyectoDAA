import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'producto',
        loadChildren: () => import('../producto/producto.module').then(m => m.ProductoModule)
      },
      {
        path: '',
        redirectTo: 'producto'
      },
      {
        path: '**',
        redirectTo: 'producto'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
