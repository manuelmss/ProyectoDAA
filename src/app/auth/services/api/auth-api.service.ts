import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { NuevoUsuario, Usuario } from '../../model/usuario';
import { ApiResponse } from '../../model/api-response';
import { JwtDto } from '../../model/jwt';

@Injectable({providedIn: 'root'})
export class AuthApiService {

    private readonly URL = `${environment.HOST}/auth`

    constructor(private httpClient: HttpClient) { }

    login(user: {nombreUsuario: string, password: string}) {
        return this.httpClient.post<ApiResponse<JwtDto>>(`${this.URL}/login`, user).pipe(
            map(apiResponse => apiResponse.data)
        );
    }

    register(user: NuevoUsuario) {
        return this.httpClient.post<ApiResponse<Usuario>>(`${this.URL}/nuevo`, user).pipe(
            map(apiResponse => apiResponse.data)
        );
    }

    existsByCorreo(correo: string) {
        return this.httpClient.get<ApiResponse<boolean>>(`${this.URL}/existsByCorreo/${correo}`).pipe(
            map(apiResponse => apiResponse.data)
        )
    }
}