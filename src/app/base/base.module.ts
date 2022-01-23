import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriaService } from './services/subcategoria.service';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MdbCarouselModule,
    MatBadgeModule
  ],
  providers: [
    CategoriaService
  ]
})
export class BaseModule { }
