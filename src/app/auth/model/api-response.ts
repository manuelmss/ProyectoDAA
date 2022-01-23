export interface ApiResponse<T> {
    error: boolean;
    codigo: string;
    titulo: string;
    mensaje: string;
    fecha: string;
    data: T;
}