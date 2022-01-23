import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria.interface';

@Injectable()
export class CategoriaService {
    
    private readonly API_SUBCATEGORIA_URL = `${environment.HOST}/categorias`

    constructor(private httpClient: HttpClient) { }

    findAll() {
        return this.httpClient.get<Categoria[]>(`${this.API_SUBCATEGORIA_URL}/findAll`);
    }
    

}