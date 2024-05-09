import { ICancion } from "./ICancion"

export interface IListaReproduccion{
    titulo: string
    portada: string
    canciones: ICancion[]
    agregarCancion(cancionNueva: ICancion):ICancion
    eliminarCancion(id: number): void
    modificarTituloCancion(id: number, nuevoTituloCancion: string): ICancion | undefined
}