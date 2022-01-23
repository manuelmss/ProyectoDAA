import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from './model/categoria.interface';
import { CategoriaService } from './services/subcategoria.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [ NgbCarouselConfig ]
})
export class BaseComponent implements OnInit {

  itemsMenu: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService
  ) {
  }

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(data => {
      this.itemsMenu = data;
    });
  }

  search() {}

  navigateByCategoria(idCategoria: number) {
    console.log(idCategoria)
  }

}
