export interface NuevoUsuario {
    nombreUsuario: string;
    email: string;
    password: string;
    roles: any[];
}

export interface Usuario {
    id: number;
    nombreUsuario: string;
    email: string;
    password: string;
    roles: any[];
}